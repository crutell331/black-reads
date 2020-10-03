import React from 'react'
import { useLocation } from 'react-router-dom'
import Login from '../components/authComponents/Login'
import Signup from '../components/authComponents/Signup'
function LoginSignup() {
    const path = useLocation().pathname
    return (
        <>
            {path === "/login" ? <Login /> : <Signup />}
        </>
    )
}

export default LoginSignup