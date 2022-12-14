const SIGNIN = "APP/SIGNIN";
const LOGOUT = "APP/LOGOUT";

export type UserType = {
  username: string;
};

const initialAppState = {
  user: null,
};

export type AppStateType = { app: { user: UserType | null } };

type AppActionType = SigninActionType | LogoutActionType;

export const AppReduser = (state = initialAppState, action: AppActionType) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, user: action.user };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

//Action creators returns actions
type SigninActionType = {
  type: typeof SIGNIN;
  user: UserType | null;
};

export const signin = (user: UserType | null): SigninActionType => ({
  type: SIGNIN,
  user,
});

type LogoutActionType = {
  type: typeof LOGOUT;
};

export const logout = (): LogoutActionType => ({
  type: LOGOUT,
});
