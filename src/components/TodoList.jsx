import React from "react";

export const TodoList = ({
  todos,
  changeState,
  editTodo,
  changeEditState,
  deleteState,
}) => {
  return (
    <ul>
      {todos !== "" &&
        todos.map((todo) => (
          <li key={todo.id}>
            <i
              className={
                todo.state === true
                  ? "fas fa-check-square"
                  : "far fa-check-square"
              }
              onClick={() => {
                changeState(todo.id);
              }}
            ></i>
            <span className="list">
              {todo.id + ` : `}
              {!todo.editState ? (
                todo.text
              ) : (
                <input
                  type="text"
                  value={todo.text}
                  onChange={(event) => {
                    editTodo(event, todo.id);
                  }}
                />
              )}
            </span>
            {!todo.editState ? (
              <span className="button">
                <a
                  href="#none"
                  onClick={() => {
                    changeEditState(todo.id);
                  }}
                >
                  수정
                </a>
                <a
                  href="#none"
                  onClick={() => {
                    deleteState(todo.id);
                  }}
                >
                  삭제
                </a>
              </span>
            ) : (
              <span className="button">
                <a
                  href="#none"
                  onClick={() => {
                    changeEditState(todo.id);
                  }}
                >
                  저장
                </a>
              </span>
            )}
          </li>
        ))}
    </ul>
  );
};
