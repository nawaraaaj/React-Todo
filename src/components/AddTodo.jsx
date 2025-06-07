import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} className="form">
        <input
          type="text"
          className="todo"
          placeholder="Enter a Todo..."
          value = {input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btnSumbit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
