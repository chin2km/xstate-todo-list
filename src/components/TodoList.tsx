import {useMachine} from '@xstate/react';
import React, {useEffect} from 'react';
import {todoMachine} from '../state-machines/todoMachine';
import styles from './styles.module.css';
import {Todos} from './Todos';
import {LoadingSpinner} from './LoadingSpinner';

export const TodoList = () => {
  const [current, send] = useMachine(todoMachine);

  const completedTodos = current.context.todos.filter(todo => todo.completed);
  const incompleteTodos = current.context.todos.filter(todo => !todo.completed);

  const showFlashScreen = current.context.showFlashScreen;

  useEffect(() => {
    send('FETCH');
  }, [send]);

  if (showFlashScreen) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.App}>
      <input
        type="text"
        className={`
                    p-6 bg-white rounded-xl shadow-md
                    focus:outline-none focus:shadow-outline
                    ${current.context.newTodoError && `border-2 border-red-400`}
                `}
        value={current.context.newTodo}
        onChange={e => {
          send({
            type: 'UPDATE_NEW_TODO',
            value: e.target.value,
          });
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            send({type: 'ADD_TODO'});
          }
        }}
        placeholder="What needs to be done?"
      />
      <button
        className="p-3 rounded-xl shadow-md bg-indigo-600 text-white hover:bg-indigo-700 align-baseline"
        onClick={() => {
          send({type: 'ADD_TODO'});
        }}
      >
        Add Todo
      </button>

      <section>
        <h3>Todos: </h3>
        <Todos todos={incompleteTodos} send={send} />
        <h3>Completed:</h3>
        <Todos todos={completedTodos} send={send} />
      </section>
    </div>
  );
};
