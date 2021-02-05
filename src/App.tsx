import React from "react";
import "./App.scss";
import {  Row } from "antd";
import TabCustomized from "./Components/Tabs/tabCustomized";

function App() {
  return (
      <Row className="App" align="middle">
        <TabCustomized/>
      </Row>
  );
}

export default App;
