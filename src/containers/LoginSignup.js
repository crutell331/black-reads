import React from 'react'
import { useLocation } from 'react-router-dom'
import LandingNavbar from '../components/LandingNavbar'
import Login from '../components/Login'
import Signup from '../components/Signup'
function LoginSignup() {
    return (
        <div className="landingPage">
            <LandingNavbar />
            {useLocation().pathname === "/login" ? <Login /> : <Signup />}
        </div>
    )
}

export default LoginSignup