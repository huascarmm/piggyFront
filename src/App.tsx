import React from "react";
import "./App.scss";
import { Row } from "antd";
import TabCustomized from "./Components/Tabs/tabCustomized";
import { Provider } from "react-redux";
import store from "./Redux/reducer";

function App() {
  return (
    <Provider store={store}>
      <Row className="App" align="middle">
        <TabCustomized />
      </Row>
    </Provider>
  );
}

export default App;
