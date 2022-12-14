import { AppStateType } from "redux/appReduser";

export const selectUser = (state: AppStateType) => {
  return state.app.user;
};
