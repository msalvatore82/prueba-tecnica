import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts, reset } from "../../features/posts/postsSlice";
import Post from "./Post/Post";
import "./Posts.scss"

const Posts = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllPosts());
    //   dispatch(reset())
    }, []);
    
    return (
      <div className="card-container">
        
        <div className="card-post">

        <Post />
        </div>
      </div>
    );
  };
  
  export default Posts;


