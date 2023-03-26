import React, {useState} from "react";
import Post from "./components/Post";
import "./styles/App.css"
import PostLIst from "./components/PostLIst";

interface post {
    id: number;
    title: string;
    description: string;
}


const App = () => {
    const initialPosts: post[] = [
        { id: 1, title: "Post 1", description: "Lorem ipsum" },
        { id: 2, title: "Post 2", description: "Dolor sit amet" },
        { id: 3, title: "Post 3", description: "Consectetur adipiscing elit" },
    ];
    const [posts, setPosts] = useState(initialPosts)

    return (
        <div className="App">
            <PostLIst posts={initialPosts}/>
        </div>
    );
};

export default App
