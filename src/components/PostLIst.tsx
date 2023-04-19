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
    remove: any;
}

const PostList = ({posts, headTitle, remove}: PostListProps & RemovePost) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{headTitle}</h1>
            {posts.map((post, index) => (
                <PostList posts={posts} remove={removePost} headTitle="My Blog Posts" />

            ))}
        </div>
    );
};

export default PostList;
