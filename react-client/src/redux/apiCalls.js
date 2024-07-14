import { loginFailure, loginStart, loginSuccess } from "./userSlice"
import {publicRequest} from '../requestmethod'

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess())
    } catch (error) {
        dispatch(loginFailure())
    }
}