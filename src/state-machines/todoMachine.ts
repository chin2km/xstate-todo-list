import {createMachine, assign} from 'xstate';
import {Todo} from '../components/Todos';

interface TodoMachineContext {
  todos: Todo[];
  newTodo: string;
  newTodoError: boolean;
  showFlashScreen: boolean;
}

export const todoMachine = createMachine<TodoMachineContext>({
  id: 'todo',
  initial: 'idle',
  context: {
    todos: [],
    newTodo: '',
    newTodoError: false,
    showFlashScreen: true,
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        id: 'fetchTodos',
        src: async () => {
          const todos = JSON.parse(localStorage.getItem('todos') || '[]');
          // faking a load time
          await new Promise(resolve => setTimeout(resolve, 2000));

          return todos;
        },
        onDone: {
          actions: assign({
            todos: (_, event) => event.data,
            showFlashScreen: _ => false,
          }),
        },
      },
      on: {
        UPDATE_NEW_TODO: {
          actions: assign({
            newTodo: (ctx, e) => e.value,
            newTodoError: ctx => false,
          }),
        },
        ADD_TODO: {
          actions: assign({
            newTodo: ctx => '',
            newTodoError: ctx => (ctx.newTodo.length > 0 ? false : true),
            todos: ctx => {
              const todos = ctx.newTodo.length
                ? [
                    ...ctx.todos,
                    {
                      id: ctx.todos.length,
                      text: ctx.newTodo,
                      completed: false,
                    },
                  ]
                : ctx.todos;

              persistTodos(todos);
              return todos;
            },
          }),
        },
        TOGGLE_TODO: {
          actions: assign({
            todos: (ctx, e) => {
              const todos = ctx.todos.map(todo =>
                todo.id === e.value.id
                  ? {...todo, completed: !todo.completed}
                  : todo,
              );
              persistTodos(todos);
              return todos;
            },
          }),
        },
        REMOVE_TODO: {
          actions: assign({
            todos: (ctx, e) => {
              const todos = ctx.todos.filter(todo => todo.id !== e.value.id);
              persistTodos(todos);
              return todos;
            },
          }),
        },
      },
    },
  },
});

const persistTodos = (todos: TodoMachineContext['todos']) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
