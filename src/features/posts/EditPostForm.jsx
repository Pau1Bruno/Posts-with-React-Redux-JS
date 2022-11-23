import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {postUpdated} from "./postsSlice";

const EditPostForm = () => {
    const {postId} = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const post = useSelector(state => {
        state.posts.find(post => post.id === postId)
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();


    function onSavePostClicked(e) {
        e.preventDefault();
        if (title && content) {
            dispatch(postUpdated({id: postId, title, content}))
            navigate(`/posts/${postId}`);
        }
    }

    return (
        <div>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </form>

            <button onClick={e => onSavePostClicked(e)}>
                Save Post
            </button>
        </div>
    );
};

export default EditPostForm;
