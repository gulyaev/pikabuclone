import { authApi } from "../api/api";

const SET_REGISTER_DATA = "SET-REGISTER-DATA";
const SET_LOGIN_DATA = "SET-LOGIN-DATA";
const LOGOUT = "LOGOUT";

let initialState = {
  usersId: null,
  email: null,
  nikname: null,
  isAuth: false,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER_DATA:
      return {
        ...state,
        usersId: action.payload.id,
        nikname: action.payload.nikname,
        email: action.payload.email,
        isAuth: true,
        message: "Аккаунт создан",
      };
    case SET_LOGIN_DATA:
      return {
        ...state,
        usersId: action.payload.user.id,
        nikname: action.payload.user.nikname,
        email: action.payload.user.email,
        isAuth: true,
        message: "Вы авторизованы",
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        usersId: null,
        nikname: null,
        email: null,
        isAuth: false,
        message: "Вы вышли",
      };
    default:
      return state;
  }
};

export const setRegisterDataActionCreator = (registerData) => {
  return { type: SET_REGISTER_DATA, payload: registerData };
};
export const setLoginDataActionCreator = (loginData) => {
  return { type: SET_LOGIN_DATA, payload: loginData };
};
export const logoutActionCreator = () => {
  return { type: LOGOUT };
};

export const authThunkCreator = () => {
  return (dispatch) => {
    return authApi
      .auth()
      .then((res) => {
        //debugger;
        dispatch(setLoginDataActionCreator(res.data));
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        localStorage.removeItem("token");
        console.log(err);
        console.log(err.response.data.message);
        //alert(err.response.data.message);
      });
  };

  // return "from authThunkCreator";
};

export default authReducer;
