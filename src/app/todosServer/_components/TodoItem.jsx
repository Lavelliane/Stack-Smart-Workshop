import React from "react";
import { DeleteOutlined } from '@ant-design/icons'
import { Card, Checkbox } from "antd";

function TodoItem({ todo }) {
  return (
    <div>
      <Card className="w-[300px]">
        <div className="flex gap-2 items-center justify-between">
          <Checkbox
            checked={todo.isCompleted}
          />
          <p>{todo.todoName}</p>
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
