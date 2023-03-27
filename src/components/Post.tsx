import React from "react";

interface post {
    id: number;
    title: String;
    description: String;
}

const Post = (props:post) => {

    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>{props.id}. </strong>
                    <strong>{props.title}</strong>
                    <div>
                        {props.description}
                    </div>
                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post;