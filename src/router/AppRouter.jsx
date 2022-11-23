import React from 'react';
import {Route, Routes} from "react-router";
import PostsList from "../features/posts/PostList";
import SinglePostPage from "../features/posts/post/SinglePostPage";
import EditPostForm from "../features/posts/EditPostForm";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/posts' element={<PostsList/>}/>
            <Route path='/posts/:postId' element={<SinglePostPage/>}/>
            <Route path='/editPost/:postId' element={<EditPostForm/>}/>
            <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;
