import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { updatePost } from "../../../features/posts/postsSlice";
import "./EditPost.scss";
import { useNavigate } from "react-router";

const EditPost = ({ visible, setVisible }) => {
  const { post } = useSelector((state) => state.posts);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const postToEdit = {
      ...post,
    };
    form.setFieldsValue(postToEdit);
  }, [post]);

  const onFinish = (values) => {
    const postWithId = { ...values, id: post.id };
    dispatch(updatePost(postWithId));
    setVisible(false);
    navigate("/posts");
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal title="Editar Post" visible={visible} footer={[]}>
      <form onFinish={onFinish} form={form} className="edit-container">
        <input
          placeholder="Titulo"
          label="Titulo"
          name="title"
          className="input-title"
        />
        <input
          placeholder="Contenido"
          name="body"
          type="text"
          label="Contenido"
          className="input-body"
        />
        <div className="buttons-modal">
          <button type="primary" className="button-modal" htmlType="submit">
            Actualizar
          </button>
          <button
            type="primary"
            className="button-modal"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default EditPost;
