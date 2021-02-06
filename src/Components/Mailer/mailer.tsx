import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import Api from "../../Redux/sagas/api";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};

interface IProps {
  handleSuccess?: any;
  handleFail?: any;
}

const Mailer: React.FC<IProps> = ({ handleSuccess, handleFail }) => {
  const onFinish = (values: any) => {
    Api.post(
      "https://boiling-scrubland-89598.herokuapp.com/email/send",
      values.user
    )
      .then((res: any) => {
        console.log("res of mailer", res);
        handleSuccess();
      })
      .catch((err: any) => {
        handleFail();
      });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Subject"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "message"]} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = (result: number) => {
  return {
    result,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleSuccess: () => dispatch({ type: "SUCCESS" }),
    handleFail: () => dispatch({ type: "FAIL" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mailer);
