import { combineReducers } from "redux";
import login from "./login";
import cadastro from "./cadastro";

const rootReducer = combineReducers({
  login,
  cadastro,
})

export default rootReducer;
