
import { Button, Input} from "antd";

import TodoItem from "../todosServer/_components/TodoItem";
import { revalidateTag } from "next/cache";

async function TodosPage() {

  const res = await fetch('https://66b515559f9169621ea5615f.mockapi.io/todos', {
    cache: "no-cache",
    next: {
      tags: ['todos']
    }
  })

  const todoList = await res.json()

  const addTodoToDatabase = async (e) => {
    'use server';
    const todoName = e.get("todoName")?.toString()
    const newTodo = {
      todoName,
      isCompleted: false
    }
    await fetch('https://66b515559f9169621ea5615f.mockapi.io/todos', {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    revalidateTag('todos')
  }
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10">
      <div>
        <form action={addTodoToDatabase} className="flex gap-2">
          <Input
            name="todoName"
          />
          <Button type="primary" htmlType="submit">
            Add Todo
          </Button>
        </form>
      </div>
      {/* TO DO LIST */}
      <div className="mt-5 flex flex-col gap-2">
        {todoList.length > 0 &&
          todoList.map((todo, i) => (
            <TodoItem todo={todo} key={i}/>
          ))}
      </div>
    </div>
  );
}

export default TodosPage;
