import { useSelector, useDispatch } from "react-redux";
import "./Post.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  destroyPostById, getPostById,
} from "../../../features/posts/postsSlice";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import EditPost from "../EditPost/EditPost";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    dispatch(getPostById(id));
  setIsModalVisible(true);
  
  };
  const deletePost = async (id) => {
    dispatch(destroyPostById(id));
  };

  return (
    <div className="card-container">
      {posts.map((post) => (
       
          <div key={post.id} className="card-post" >
            <>
            <p className="text-user">UserId: {post.userId}</p>
            </>                
                <p className="text-title">Title: {post.title}   </p>
                <p className="text-body">Body: {post.body} </p> 
                <EditOutlined onClick={() => showModal(post.id)} />            
                <button
                  className="button-delete"
                  onClick={() => deletePost(post.id)}
                >
                  Eliminar Post <FaRegTrashAlt style={{ marginLeft: 5 }} />
                </button>
               
          </div>
      ))}
      <EditPost visible={isModalVisible} setVisible={setIsModalVisible}/>
    </div>
  );
};

export default Post;
