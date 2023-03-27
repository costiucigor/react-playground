import React, { useState } from "react";

interface Post {
    id: number;
    title: string;
    description: string;
}

interface AddPostProps {
    onAddPost: (post: Post) => void;
}

const AddPost = ({ onAddPost }: AddPostProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost: Post = {
            id: Math.floor(Math.random() * 1000),
            title: title,
            description: description,
        };
        onAddPost(newPost);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Enter title</h1>
                <input value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <h1>Enter description</h1>
                <input value={description} onChange={(event) => setDescription(event.target.value)} />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPost;
