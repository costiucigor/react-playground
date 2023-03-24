import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

const ToDoList = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

    const handeAddTask = (text: string) => {
        const newTodo = {id: todos.length + 1, text: text, completed: false};
        setTodos([...todos, newTodo])
    }

    return (
            <div>
                <h2>To do List</h2>
                {todos.map(todo => (
                    <ToDoItem key={todo.id} text={todo.text} completed={todo.completed} />
                ))}
                <AddTask onAddTask={handeAddTask} />
            </div>
    )
}

export default ToDoList;
