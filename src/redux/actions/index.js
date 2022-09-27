import { SALVAR_CADASTRO, SALVAR_LOGIN } from "./actionsTypes";

export const addLogin = (payload) => ({
  type: SALVAR_LOGIN,
  payload,
})

export const addCadastro = (payload) => ({
  type: SALVAR_CADASTRO,
  payload,
})

