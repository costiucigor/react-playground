import React, { useState } from "react";
import {Simulate} from "react-dom/test-utils";

interface AddTaskProps {
    onAddTask: (text: string) => void;
}

const AddTask = (props: AddTaskProps) => {
    const [text, setText] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onAddTask(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default AddTask;