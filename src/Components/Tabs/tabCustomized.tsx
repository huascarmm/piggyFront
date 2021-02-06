import * as React from "react";
import { Tabs, Card, Col } from "antd";
import Mailer from "../Mailer/mailer";
import Deposit from "../Deposit/deposit";
import Notifications from "../Notifications";
const { TabPane } = Tabs;

const TabCustomized: React.FC = () => (
  <Col xs={{ span: 22, offset: 1 }} lg={{ span: 12, offset: 6 }}>
    <Card>
      <Notifications />
      <Tabs defaultActiveKey="1" style={{ height: "300px" }}>
        <TabPane tab="Deposit" key="1">
          <Deposit />
        </TabPane>
        <TabPane tab="Mailer" key="2">
          <Mailer />
        </TabPane>
      </Tabs>
    </Card>
  </Col>
);

export default TabCustomized;
