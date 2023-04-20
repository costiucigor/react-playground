import React from 'react';
import Post from "./Post";

interface Post {
    id: number;
    title: string;
    description: string;
}

interface PostListProps {
    posts: Post[];
    headTitle: string;
}

interface RemovePost {
    remove: (post: Post) => void;
}

const PostList = ({posts, headTitle, remove}: PostListProps & RemovePost) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{headTitle}</h1>
            {posts.map((post, index) => (
                <Post key={post.id} id={post.id} title={post.title} description={post.description} remove={remove} number={index + 1} />
            ))}
        </div>
    );
};

export default PostList;
