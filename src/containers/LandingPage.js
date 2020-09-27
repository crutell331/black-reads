import React from 'react'
import LandingNavbar from '../components/LandingNavbar'
import Login from '../components/Login'
function LandingPage() {
    return (
        <div className="landingPage">
            <LandingNavbar />
            <Login />
        </div>
    )
}

export default LandingPage