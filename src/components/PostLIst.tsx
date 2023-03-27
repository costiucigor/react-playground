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

interface PostTitle {
    HeadTitle: string;
}

const PostLIst = ({posts}: PostListProps, {HeadTitle}: PostTitle) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{HeadTitle}</h1>
            {posts.map((post, index) => (
                <Post number={index + 1} key={post.id} {...post} />
            ))}
        </div>
    );
};

export default PostLIst;