import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, backButton } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTodo</p>
      <ul>
        {completeTodos.map((completeTodo, key) => {
          return (
            <div key={completeTodo} className="list-row">
              <li>{completeTodo}</li>
              <button onClick={() => backButton(key)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
