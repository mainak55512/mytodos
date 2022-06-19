import React, { useState,useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function Todos() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {

    let sno;
    if (todos.length) {
      sno = todos[todos.length-1].sno+1;
    } else {
      sno = 0;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);

  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h3 className="text-center" style={{ marginBottom: "50px" }}>
        My Todos
      </h3>
      <AddTodo addTodo={addTodo} />
      {todos.length? (
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />;
        })
      ) : (
        <p
          className="text-center"
          style={{
            position: "relative",
            fontSize: "35px",
            fontWeight: "lighter",
            opacity: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          No Todos to display
        </p>
      )}
    </div>
  );
}
