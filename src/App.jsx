import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodo } from "./components/incompleteTodo";
import { CompleteTodo } from "./components/completeTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const addTodo = () => {
    if (todoText === "") return;
    const newImcompleteTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newImcompleteTodos);
    setTodoText("");
  };
  const deleteButton = (key) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(key, 1);
    setImcompleteTodos(newImcompleteTodos);
  };
  const completeButton = (key) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(key, 1);
    setImcompleteTodos(newImcompleteTodos);
    const newCompleteTodos = [...completeTodos, imcompleteTodos[key]];
    setCompleteTodos(newCompleteTodos);
  };

  const [completeTodos, setCompleteTodos] = useState([]);
  const backButton = (key) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(key, 1);
    setCompleteTodos(newCompleteTodos);
    const newImcompleteTodos = [...imcompleteTodos, completeTodos[key]];
    setImcompleteTodos(newImcompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        addTodo={addTodo}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>Todoリストは5個までです</p>
      )}
      <IncompleteTodo
        imcompleteTodos={imcompleteTodos}
        completeButton={completeButton}
        deleteButton={deleteButton}
      />
      <CompleteTodo completeTodos={completeTodos} backButton={backButton} />
    </>
  );
};
