import { createStore } from "redux";

const initialState = {
  name: "",
  email: "",
  password: "",
  mobilePhone: "",
  idDevice: "245-777-333",
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
