import React from "react";

const inputArea = {
  backgroundColor: "#f9e6cc",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "5px"
};

export const InputTodo = (prop) => {
  const { todoText, onChange, onClick, disabled } = prop;
  return (
    <div style={inputArea}>
      <input
        disabled={disabled}
        placeholder="todoを入力してください"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
