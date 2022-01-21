import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const TodoFrame = (props) => {
  const initialTodos = [
    {
      id: 1234,
      text: "공부하기",
      state: false,
      editState: false,
    },
    {
      id: 12345,
      text: "운동하기",
      state: false,
      editState: false,
    },
    {
      id: 123456,
      text: "글쓰기",
      state: true,
      editState: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [inputText, setInputText] = useState("");

  const createId = function () {
    return Math.random().toString(36).substr(2, 16);
  };

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };

  const addTodo = (event) => {
    if (inputText !== "") {
      const newId = createId();
      setTodos([
        ...todos,
        { id: newId, text: inputText, state: false, editState: false },
      ]);
      setInputText("");
    } else {
      alert("내용을 입력 해주세요.");
    }
  };

  const editTodo = (event, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: event.target.value } : todo
      )
    );
  };

  const changeState = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, state: !todo.state } : todo
      )
    );
  };

  const changeEditState = (id) => {
    const editInputText = todos
      .filter((todo) => todo.id === id)
      .map((todo) => todo.text)
      .toString();
    if (editInputText !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, editState: !todo.editState } : todo
        )
      );
    } else {
      alert("내용을 입력 해주세요.");
    }
  };

  const deleteState = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-frame">
      <TodoInput
        inputText={inputText}
        onChangeInput={onChangeInput}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        inputText={inputText}
        changeState={changeState}
        editTodo={editTodo}
        changeEditState={changeEditState}
        deleteState={deleteState}
      />
    </div>
  );
};
