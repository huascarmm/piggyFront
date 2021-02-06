import { createStore } from "redux";

interface Action {
  type: String;
}

const countReducer = function (state = 0, action: Action) {
  switch (action.type) {
    case "SUCCESS":
      return 2;
    case "FAIL":
      return 1;
    default:
      return state;
  }
};
let store = createStore(countReducer);
export default store;
