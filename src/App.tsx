import React, {useState} from "react";
import Post from "./components/Post";
import PostList from "./components/PostLIst";
import AddPost from "./components/AddPost";
import "./styles/App.css";

interface Post {
    id: number;
    title: string;
    description: string;
}

const App = () => {
    const initialPosts: Post[] = [
        { id: 1, title: "Post 1", description: "Lorem ipsum" },
        { id: 2, title: "Post 2", description: "Dolor sit amet" },
        { id: 3, title: "Post 3", description: "Consectetur adipiscing elit" },
    ];

    const removePost = (post: Post) => {
        const updatedPosts = posts.filter((p) => p.id !== post.id);
        setPosts(updatedPosts);
    };

    const [posts, setPosts] = useState(initialPosts);

    const handleAddPost = (newPost: Post) => {
        setPosts([...posts, newPost]); // add the new post to the posts array using the spread operator
        // @ts-ignore
    };

    return (
        <div className="App">
            <AddPost onAddPost={handleAddPost} />
            <PostList posts={posts} remove={removePost} headTitle="My Blog Posts" />
        </div>
    );
};

export default App;
``
