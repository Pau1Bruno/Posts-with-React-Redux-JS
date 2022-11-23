import React from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const SinglePostPage = () => {
    const {postId} = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === postId));


    if (!post) return <h1>No post with this id</h1>


    return (
        <div>
            <h3>Page with id = {post.id}</h3>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <Link to={`/editPost/${post.id}`} >Edit</Link>
        </div>
    );
};

export default SinglePostPage;
