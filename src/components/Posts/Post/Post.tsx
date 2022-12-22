import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import "./Post.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import {destroyPostById,getAllPosts,getPostById,} from "../../../features/posts/postsSlice";
import { useState } from "react";
import { getAllFriends } from "../../../features/auth/authSlice";
import { AppDispatch } from "../../../app/store";

const Post = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts } = useSelector((state: any) => state.posts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { friends  } = useSelector((state: any) => state.auth);

  console.log(posts);

  const showModal = (id: number) =>  {
    dispatch(getPostById(id));
    setIsModalVisible(true);
  };
  const deletePost = async (id: number) => {
    dispatch(destroyPostById(id));
  };

  const [id, setId] = useState<any>();



  const clearState = () => {
    setId({
      id: 0,
    });
  };
  useEffect(() => {
      dispatch(getAllFriends());
    }, []);

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(getAllPosts(id));
    clearState();
  };


  const selectOption = friends.map((user: {id: number, name: string}) => {
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
        {posts.map((post: { userId: number, id: number, title: string, body: string }) => (
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
