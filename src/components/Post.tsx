import React from "react";
import MyButton from "./UI/button/Button";

interface PostProps {
    id: number;
    title: String;
    description: String;
    remove: (post: PostProps) => void;
    number: number;
}

const Post = (props: PostProps) => {

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>{props.number}. </strong>
                    <strong>{props.title}</strong>
                    <div>
                        {props.description}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props)} label={"Delete"} type={"submit"}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default Post;