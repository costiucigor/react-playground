import React from "react";
import MyButton from "./UI/button/Button";

interface post {
    id: number;
    title: String;
    description: String;
    number: number;
}

const Post = (props:post) => {

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
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default Post;