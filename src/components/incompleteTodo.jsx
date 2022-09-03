import React from "react";

export const IncompleteTodo = (props) => {
  const { imcompleteTodos, completeButton, deleteButton } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {imcompleteTodos.map((todo, key) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => completeButton(key)}>完了</button>
              <button onClick={() => deleteButton(key)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
