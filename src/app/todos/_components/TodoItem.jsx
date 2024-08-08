import React from "react";
import { DeleteOutlined } from '@ant-design/icons'
import { Card, Checkbox } from "antd";

function TodoItem({ todo, onCompleteTodo }) {
  return (
    <div>
      <Card className="w-[300px]">
        <div className="flex gap-2 items-center justify-between">
          <Checkbox
            checked={todo.isChecked}
            onChange={() => onCompleteTodo(todo.id)}
          />
          <p>{todo.name}</p>
          <div className="flex gap-2">
            <DeleteOutlined
              className="cursor-pointer"
              style={{ color: "#eb2f96" }}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TodoItem;
