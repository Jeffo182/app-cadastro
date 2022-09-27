import { SALVAR_LOGIN } from "../actions/actionsTypes";

const INITIAL_STATE = {
  email: '',
  password: '',
}

function loginReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SALVAR_LOGIN:
      return {
        email: action.payload.email,
        password: action.payload.password,
      }
    default:
      return state;
  }
}

export default loginReducer;
