import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
import { updatePost } from "../../../features/posts/postsSlice";

const EditPost = ({ visible, setVisible }) => {
  const { posts, post } = useSelector((state) => state.posts);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

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
  };

  return (
    <Modal title="Editar Post" visible={visible} footer={[]}>
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="Editar titulo" name="title">
          <Input placeholder="Titulo" />
        </Form.Item>
        <Form.Item label="Editar post">
          <Form.Item name="body" noStyle>
            <Input placeholder="body" />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default EditPost;
