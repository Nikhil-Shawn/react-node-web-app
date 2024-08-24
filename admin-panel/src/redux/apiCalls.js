import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestmethod";

// Login slice for user

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        // publicRequest api is declared requestmethod
        const res = await publicRequest.post("/login", user);
        console.log("API Response:", res); 
        dispatch(loginSuccess(res.data));
    } catch (error) {
        console.error("API Error:", error); 
        dispatch(loginFailure());
    }
};
