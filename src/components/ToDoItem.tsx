import React from "react";

interface ToDoItemProps {
    completed: boolean;
    text: string;
}

const ToDoItem = (props: ToDoItemProps) => {
    return (
        <div>
            <input type="checkbox"  defaultChecked={props.completed}/>
            <span>{props.text}</span>
        </div>
    )
}

export default ToDoItem