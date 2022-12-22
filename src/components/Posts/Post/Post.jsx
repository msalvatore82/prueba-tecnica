import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import "./Post.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  destroyPostById,
  getAllPosts,
  getPostById,
} from "../../../features/posts/postsSlice";
import { useState } from "react";
import { getAllFriends } from "../../../features/auth/authSlice";
import { Navigate } from "react-router";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { friends  } = useSelector((state) => state.auth);

  console.log(posts);

  const showModal = (id) => {
    dispatch(getPostById(id));
    setIsModalVisible(true);
  };
  const deletePost = async (id) => {
    dispatch(destroyPostById(id));
  };

  const [id, setId] = useState(1);


  const clearState = () => {
    setId({
      id: 1,
    });
  };
  useEffect(() => {
      dispatch(getAllFriends());
    }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    dispatch(getAllPosts(id));
    clearState();
    Navigate("/");
  };


  const selectOption = friends.map((user) => {
    return (
      <option key={user.id} value={user.id} >
        {user.name}
      </option>
    );
  });
  
  return (
    <>
    <form onSubmit={onSubmit} className="form-select-user" >
      <select placeholder="Please select genre" onChange={(e)=> setId(e.target.value)} className="select-user" >
        {selectOption}
      </select>
      <button className="button-select"  >Seleccionar Usuario</button>
    </form>
      <div className="card-container">
        {posts.map((post) => (
          <div key={post.id} className="card-post">
            <p className="text-user">UserId: {post.userId}</p>
            <p className="text-title">Title: {post.title} </p>
            <p className="text-body">Body: {post.body} </p>
            <div className="buttons-posts">
              
              

              <button
                className="button-delete"
                onClick={() => deletePost(post.id)}
              >
                Eliminar Post <FaRegTrashAlt style={{ marginLeft: 5 }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
