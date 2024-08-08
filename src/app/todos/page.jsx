"use client";
import { Button, Input} from "antd";
import React, { useState } from "react";

import TodoItem from "./_components/TodoItem";

function TodosPage() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    let id = 0
    if(todoList.length > 0){
      id = todoList.slice(-1)[0].id + 1
    }
    setTodoList((prev) => [...prev, { id, isChecked: false, name: todoInput }]);
  }

  function onCompleteTodo(id){
    const todoListCopy = [...todoList]
    const updatedList = todoListCopy.map((todo) => {
      if(todo.id === id){
        return { ...todo, isChecked: true } //return with isChecked true
      }
      return todo //return as-is
    })
    setTodoList(updatedList)
  }
  console.log(todoList)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex gap-2">
        <Input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button type="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </div>
      {/* TO DO LIST */}
      <div className="mt-5 flex flex-col gap-2">
        {todoList.length > 0 &&
          todoList.map((todo, i) => (
            <TodoItem todo={todo} onCompleteTodo={onCompleteTodo} key={i}/>
          ))}
      </div>
    </div>
  );
}

export default TodosPage;
