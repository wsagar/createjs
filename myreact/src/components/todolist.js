import React, { useEffect, useState } from "react";
import "./todo.css";

export default function Todolist() {
  const [list, updateList] = useState("");
  const [elements, setElements] = useState([]);

  const updateTodoList = (event) => {
    updateList(event.target.value);
  };

  const listOfItems = () => {
    setElements((prev) => {
      return [...prev, list];
    });
  };

  useEffect(() => {
    updateList("");
  }, [elements]);

  return (
    <>
      <h1 className="maindiv">To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add items"
          onChange={updateTodoList}
          value={list}
        />
        <button onClick={listOfItems}> + </button>
      </div>
      <ol>
        {elements.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
      </ol>
    </>
  );
}
