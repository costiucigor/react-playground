import React from 'react';
import Post from "./Post";


interface Post {
    id: number;
    title: string;
    description: string;
}

interface PostListProps {
    posts: Post[];
}

const PostLIst = ({posts}: PostListProps) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>List of posts</h1>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
};

export default PostLIst;