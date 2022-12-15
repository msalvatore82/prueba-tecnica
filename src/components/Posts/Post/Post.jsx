import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Post.scss"
import { FaRegTrashAlt } from "react-icons/fa";
import { destroyPostById } from "../../../features/posts/postsSlice";




const Post = () => {
  const { posts, isLoading,  } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const deletePost = async (id) => {
    dispatch(destroyPostById(id));
   };

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
      
      {posts.map((post) => (
        <div className="card-container">
        <div className="card-post" key={post.id}>
          <Link to={"/post/" + post.id}>
            <p className="text-user" >UserId: {post.userId}</p>
            {/* <p>Id: {post.Id}</p> */}
            <p className="text-title" >Title: {post.title}</p>
            <p className="text-body">Body: {post.body}</p>
        <button className="button-delete"  onClick={()=>deletePost(post.id)} > eliminar Post <FaRegTrashAlt style={{ marginLeft: 5,  }} /> </button> 
          </Link>
        </div>
        </div>
      ))}
    </div>
   
  );
};

export default Post;

