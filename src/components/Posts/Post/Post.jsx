import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Post.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { destroyPostById,updatePost} from "../../../features/posts/postsSlice";
import Modal from "antd/es/modal";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts, post, isLoading } = useSelector((state) => state.posts);
  const deletePost = async (id) => {
    dispatch(destroyPostById(id));
  };
  const [setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);

    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const [updateData, setUpdateData] = useState({
    title: "",
    body: "",
  });

  const { title, body } = updateData;

  const onChange = (e) => {
    setUpdateData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const clearState = () => {
    setUpdateData({
      title: "",
      body: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(updateData));
    clearState();
    navigate("/posts");
  };

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <>
      {posts.map((post) => (
        <div className="card-container">
          <div className="card-post" key={post.id}>
            <Link>
              <p className="text-user">UserId: {post.userId}</p>
              <p className="text-title">Title: {post.title}</p>
              <p className="text-body">Body: {post.body}</p>
              <button
                className="button-delete"
                onClick={() => deletePost(post.id)}
              >
                eliminar Post <FaRegTrashAlt style={{ marginLeft: 5 }} />{" "}
              </button>
              <button
                type="primary"
                onClick={() => showModal(post.id)}
                className="button-delete"
                

              >
                Actulizar Post
                
              </button>
            </Link>
            <>
              <Modal
                open={open}
                title={post.Id}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
                

              >
                <form className="form">
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange}
                    className="input-name"
                    placeholder="Name"
                  />
                  <input
                    className="input-password"
                    placeholder="body"
                    type="text"
                    name="body"
                    value={body}
                    onChange={onChange}
                  />
                  <button className="button-delete" type="primary" onClick={handleOk} onSubmit={onSubmit}>
                    confirmar
                  </button>
                  <button className="button-delete" key="back" onClick={handleCancel}>
                    Return
                  </button>
                </form>
              </Modal>
            </>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
