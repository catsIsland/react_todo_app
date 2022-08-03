import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, settodoText] = useState("");

  const [incompleteTodos, setincompleteTodos] = useState([]);

  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => settodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    settodoText("");
  };

  const onClickdelete = (index) => {
    if (incompleteTodos.length <= 5) {
      noreturnShowFlag && setnoreturnShowFlag(false);
    }
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  const onClickcomplete = (index) => {
    if (incompleteTodos.length <= 5) {
      noreturnShowFlag && setnoreturnShowFlag(false);
    }

    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setincompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newCompleteTodos);
  };

  const [noreturnShowFlag, setnoreturnShowFlag] = useState(false);

  const onClickReturn = (index) => {
    if (incompleteTodos.length >= 5) {
      noreturnShowFlag || setnoreturnShowFlag(true);
      return;
    } else {
      noreturnShowFlag && setnoreturnShowFlag(false);
      const newCompleteTodos = [...completeTodos];
      newCompleteTodos.splice(index, 1);
      setcompleteTodos(newCompleteTodos);
      const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
      setincompleteTodos(newIncompleteTodos);
    }
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは５個までです！</p>
      )}

      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickcomplete={onClickcomplete}
        onClickdelete={onClickdelete}
      />

      {noreturnShowFlag && (
        <p style={{ color: "darkcyan" }}>
          登録できるTODOは５個までですので戻せません！
        </p>
      )}

      <CompleteTodo
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
