import React, {useRef, useState} from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPost: Post = {
            id: Date.now(),
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
                <Input value={title} placeholder="Title" onChange={(e: any) => setTitle(e.target.value)} />
            </div>
            <div>
                <Input value={description} placeholder="Description" onChange={(e: any) => setDescription(e.target.value)} />
            </div>
            <Button type="submit">Add Post</Button>
        </form>
    );
};

export default AddPost;
