import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../blogsPosts/blogPosts";
import { useState, useEffect } from "react";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

export default function BlogPost() {
    const { slug } = useParams();
    const { title, imgUrl, content } = blogPosts[slug];

    // React Hooks - Use State

    const [upvotes, setUpvotes] = useState(0);

    function onUpvote() {
        setUpvotes(upvotes + 1);
    }

    function onDownvote() {
        if (upvotes > 0) {
            setUpvotes(upvotes - 1);
        }
    }

    // Use Effect - Set username
    const [username, setUsername] = useState("Loading...");

    useEffect(() => {
        fetch(USER_URL)
            .then((res) => res.json())
            .then((users) => setUsername(users[0].username));
    }, []);

    // Use Effect - Other side effects
    useEffect(() => {
      console.log("Upvotes: " + upvotes)
    }, [upvotes])

    return (
        <div className="flex flex-col items-center space-y-4 p-10">
            <img
                className="h-96 w-96 rounded-full object-cover"
                src={imgUrl}
                alt={imgUrl}
            />
            <h1 className="font-bold text-4xl">{title}</h1>
            <h2>by {username}</h2>
            <p className="text-lg">{content}</p>
            {/* Upvoting */}
            <div className="flex p-2 items-center justify-center space-x-2">
                <button
                    className="border p-2 rounded-xl px-3 hover:bg-slate-100 transition"x
                    onClick={onUpvote}
                >
                    👍
                </button>
                <p>{upvotes}</p>
                <button
                    className="border p-2 rounded-xl px-3 hover:bg-slate-100 transition"
                    onClick={onDownvote}
                >
                    👎
                </button>
            </div>
        </div>
    );
}
