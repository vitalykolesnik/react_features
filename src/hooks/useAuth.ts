import { useDispatch, useSelector } from "react-redux";
import { AppStateType, signin, UserType } from "redux/appReduser";
import { selectUser } from "redux/appSelector";
import { AppDispatch } from "redux/store";

export const useAuth = () => {
  const user = useSelector((state: AppStateType) => selectUser(state));
  const dispatch = useDispatch<AppDispatch>();

  const signup = (user: UserType, cb: () => void) => {
    dispatch(signin(user));
    cb();
  };

  const logout = (cb: () => void) => {
    dispatch(signin(null));
    cb();
  };

  const value = { user, signup, logout };

  return value;
};
