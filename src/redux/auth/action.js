import axios from "axios";
import { authActionTypes } from "./actionType";

// const URL = process.env.REACT_APP_URL_DEV;
// axios.defaults.baseURL = URL;

export const authenticate = (loginCred) => async(dispatch) => {
    console.log(loginCred, "cred")
    try {
        dispatch({type: authActionTypes.LOGIN_REQUEST})
        let response = await axios.post("https://myscreenauth.annamrajus.com/api/Authenticate/login", loginCred);
        console.log(response);
        if(response.data.token){
            dispatch({type: authActionTypes.LOGIN_SUCCESS, payload: response.data.token})
        }
        localStorage.setItem("token", response.data.token);

    } catch (error) {
        dispatch({type: authActionTypes.LOGIN_FAILURE});
    }
}

export const Logout = () => async (dispatch) => {
    // REMOVE_LOCAL("login_data");
    localStorage.removeItem("token");
    dispatch({ type: authActionTypes.LOGOUT_REQ });
  };

