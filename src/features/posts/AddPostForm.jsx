import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postAdded} from "./postsSlice";

const PostForm = ({setVisible}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const users = useSelector(state => state.users)
    const dispatch = useDispatch();

    const addPost = (e) => {
        e.preventDefault();
        if (canSave) {
            dispatch(postAdded(title, content, userId))
            setTitle('');
            setContent('');
            setVisible(false);
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <div>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input
                    type='text'
                    name='postTitle'
                    id='postTitle'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <label htmlFor="postContent">Content:</label>
                <textarea
                    style={{resize: "none"}}
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" onChange={(e) => setUserId(e.target.value)}>
                    <option></option>
                    {usersOptions}
                </select>

                <button onClick={e => addPost(e)}>Add post</button>
            </form>
        </div>
    );
};

export default PostForm;
