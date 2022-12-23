import { useEffect } from "react"
import { current } from "../Redux/Actions/AuthActions"
import { useDispatch, useSelector } from "react-redux"
const Profil=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=> state.AuthReducer.user)

    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user._id}</h3>
        </div>
    )
}

export default Profil