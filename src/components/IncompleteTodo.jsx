import React from "react";

export const IncompleteTodo = (prop) => {
  const { incompleteTodos, onClickcomplete, onClickdelete } = prop;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickcomplete(index)}>完了</button>
              <button onClick={() => onClickdelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
