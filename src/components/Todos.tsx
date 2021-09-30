import React from 'react';
import {Sender} from 'xstate';
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const Todos: React.FC<{todos: Todo[]; send: Sender<any>}> = ({
  todos,
  send,
}) => {
  if (todos.length === 0) {
    return <span className="mx-auto"> - </span>;
  }

  return (
    <>
      {todos
        .sort((a, b) => b.id - a.id)
        .map(todo => (
          <div
            key={todo.id}
            onClick={() => {
              send({
                type: 'TOGGLE_TODO',
                value: todo,
              });
            }}
            className={`h-30 my-4 p-2 shadow-sm rounded-xl ${
              todo.completed ? 'text-gray-400' : ''
            } cursor-pointer`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              className="mx-2"
              onChange={() => undefined}
            />
            <span>{todo.text}</span>
            <button
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                send({type: 'REMOVE_TODO', value: todo});
              }}
              className="float-right text-xl text-indigo-600"
            >
              🅧
            </button>
          </div>
        ))}
    </>
  );
};
