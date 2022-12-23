import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../TypeActions/AuthType"
import axios from "axios"
import { alertError } from "./ErrorActions"

export const register=(user,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',user)
        
        dispatch({
            type : REGISTER,
            payload : res.data
        })

        navigate("/profil")

    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data
        // })

        error.response.data.errors.forEach(element => {
            dispatch(alertError(element.msg))
        });
    }
}

export const login=(userl,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignIn',userl)

        dispatch({
            type : LOGIN,
            payload : res.data
        })

        navigate("/profil")
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const current=()=>async(dispatch)=>{
    const config={
        headers:{
            Authorized : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/auth/currentUser',config)

        dispatch({
            type : CURRENT,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}