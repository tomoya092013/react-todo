import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, addTodo, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button disabled={disabled} onClick={addTodo}>
        追加
      </button>
    </div>
  );
};
