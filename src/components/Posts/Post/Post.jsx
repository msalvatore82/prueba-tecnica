import { useSelector, useDispatch } from "react-redux";
import "./Post.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  destroyPostById,
} from "../../../features/posts/postsSlice";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

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
                <button
                  className="button-delete"
                  onClick={() => deletePost(post.id)}
                >
                  Eliminar Post <FaRegTrashAlt style={{ marginLeft: 5 }} />
                </button>
               
          </div>
      ))}
    </div>
  );
};

export default Post;
