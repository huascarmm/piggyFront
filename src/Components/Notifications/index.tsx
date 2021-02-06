import React from "react";
import { notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

import { connect } from "react-redux";

interface IProps {
  result?: number;
}

const Notification: React.FC<IProps> = ({ result }) => {
  console.log("SAGAS", result);

  switch (result) {
    case 2:
      notification.open({
        message: "SUCCESS",
        description: "Succesfull request",
        icon: <SmileOutlined />,
      });
      break;
    case 1:
      notification.open({
        message: "FAIL",
        description: "Your request had a error",
        icon: <FrownOutlined />,
      });
      break;

    default:
      break;
  }

  return <div></div>;
};

const mapStateToProps = (result: number) => {
  return {
    result,
  };
};
export default connect(mapStateToProps)(Notification);
