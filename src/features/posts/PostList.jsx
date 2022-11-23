import React, {useState} from 'react';
import {useSelector} from "react-redux";
import AddPostForm from "./AddPostForm";
import {Link} from "react-router-dom";
import Modal from "../../components/Modal/Modal";


const PostsList = () => {
    const posts = useSelector(state => state.posts)
    const [modal, setModal] = useState(false);


    return (
        <div>
            <button onClick={() => setModal(true)}>Жмакни</button>
            <Modal visible={modal} setVisible={setModal}>
                <AddPostForm setVisible={setModal}/>
            </Modal>
            <h2>Posts</h2>
            {posts.map(post =>
                <div key={post.id}>
                    {post.id}. {post.title} {post.content}
                    <Link to={`${post.id}`}>Check Post</Link>
                </div>
            )}
        </div>
    );
};

export default PostsList;
