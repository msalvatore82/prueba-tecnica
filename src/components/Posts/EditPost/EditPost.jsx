import { useSelector } from "react-redux";
import { Button, Modal, Form, InputNumber, Input } from "antd";

const EditPost = ({ visible, setVisible }) => {
  const { posts} = useSelector((state) => state.posts);

  const onFinish = (values) => {
    console.log(values);
    setVisible(false);
  };

  return (
    <Modal title="Edit Book" visible={visible} footer={[]}>
      <Form onFinish={onFinish}>
        <Form.Item label="Book Name" name="name">
          <Input placeholder="Book name" />
        </Form.Item>
        <Form.Item label="Price">
          <Form.Item name="price" noStyle>
            <InputNumber />
          </Form.Item>

          <span className="ant-form-text"> €</span>
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
