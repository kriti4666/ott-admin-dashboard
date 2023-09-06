import { authActionTypes } from "./actionType"

const initalState = {
    loading: false,
    error: false,
    isLogin: false,
    token: "",
    isVerfied: false,

}


export const loginReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case authActionTypes.LOGIN_REQUEST: return {
            ...state,
            loading: true,
            error: null,
            isLogin: false
        };
        case authActionTypes.LOGIN_SUCCESS:
            console.log(payload, "auth")
            return {
            ...state,
            loading: false,
            token: payload,
            isVerfied: true,
            error: null,
        };
        case authActionTypes.LOGIN_FAILURE: return {
            ...state,
            loading: false,
            token: "",
            error: true,
            isVerfied: false,
        };
        case authActionTypes.LOGOUT_REQ:
            localStorage.removeItem("token")
            return {
            ...state,
            loading: false,
            token: "",
            error: null,
            isVerfied: false,
        };
        default: return state;
    }
}