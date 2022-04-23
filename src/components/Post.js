// This component won't work because changes in React Router version (*update: I made things work using react hooks)
// To show posts and get route parameters, you have to use 'useParams' hook

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {

    const { post_id } = useParams();
    let [post, setPost] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
            setPost(res.data);
        }
        getPost();
    }, [post_id]);

    console.log(post);

    const jsxPost = post ? (
        <div className="container">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ) : (
        <div className="center">Post Loading...</div>
    );

    return (
        < div className="container" >
            {jsxPost}
        </div >
    )
}

export default Post;