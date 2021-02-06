import { Form, InputNumber, Button } from "antd";
import Web3 from "web3";
import { connect } from "react-redux";
import Api from "../../Redux/sagas/api";
import { useEffect } from "react";
declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
interface IProps {
  handleSuccess?: any;
  handleFail?: any;
}

const Deposit: React.FC<IProps> = ({ handleSuccess, handleFail }) => {
  let web3: any;

  const onFinish = (value: any) => {
    console.log("value", value.user.deposit);
    web3.eth.getAccounts((error: any, result: any) => {
      console.log("result", result);
      web3.eth.sendTransaction(
        {
          from: result[0],
          to: "0x404a1D98803a1A9f3d76B4a6bADBF8a289681865",
          value: parseFloat(value.user.deposit) * 1000000000000000000,
        },
        (err: any, transactionHash: string) => {
          if (!err) console.log(transactionHash);
        }
      );
    });
  };

  useEffect(() => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        window.ethereum.enable().then(function () {
          // User has allowed account access to DApp...
        });
      } catch (e) {
        // User has denied account access to DApp...
      }
      web3.eth.getBlock("latest").then(console.log);
    }
    // Legacy DApp Browsers
    else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    }
    // Non-DApp Browsers
    else {
      alert("You have to install MetaMask !");
    }
  }, []);

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "deposit"]}
        label="Ammount"
        rules={[{ type: "number", min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleSuccess: () => dispatch({ type: "SUCCESS" }),
    handleFail: () => dispatch({ type: "FAIL" }),
  };
};

export default connect(mapDispatchToProps)(Deposit);
