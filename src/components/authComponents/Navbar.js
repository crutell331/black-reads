import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

function Bar(props) {
    const location = useLocation().pathname
    return (
        <>
            {location === "/login" || location === "/signup" ?
                <Navbar bg="dark" variant="dark" expand='sm' fixed="top" id="navbar">
                    <Navbar.Text >
                        <h1 id="navbar">Black Reads</h1>
                    </Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        {props.user ?
                            <Navbar.Text>
                                Signed in as: {props.user.username}
                            </Navbar.Text>
                            :
                            <NavLink to="/login">Log In</NavLink>
                        }

                    </Navbar.Collapse>
                </Navbar> :

                <Navbar bg="dark" variant="dark" expand='sm' fixed="top" id="navbar">
                    <Navbar.Text >
                        <h1 id="navbar">Black Reads</h1>
                    </Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        {props.user ?
                            <Navbar.Text>
                                Signed in as: {props.user.username}
                            </Navbar.Text>
                            :
                            <NavLink to="/login">Log In</NavLink>
                        }

                    </Navbar.Collapse>
                </Navbar>
            }
        </>

    )
}

// function authorizedNavbar(){
//     return(
//         <Navbar bg="dark" variant="dark" expand='sm' fixed="top" id="navbar">
//             <Navbar.Text >
//                 <h1 id="navbar">Black Reads</h1>
//             </Navbar.Text>
//             <Navbar.Collapse className="justify-content-end">
//                 {props.user ?
//                     <Navbar.Text>
//                         Signed in as: {props.user.username}
//                     </Navbar.Text>
//                     :
//                     <NavLink to="/login">Log In</NavLink>
//                 }

//             </Navbar.Collapse>
//         </Navbar>
//     )
// }
// function unauthorizedNavbar(){
//     return(
//         <Navbar bg="dark" variant="dark" expand='sm' fixed="top" id="navbar">
//             <Navbar.Text >
//                 <h1 id="navbar">Black Reads</h1>
//             </Navbar.Text>
//             <Navbar.Collapse className="justify-content-end">
//                 {props.user ?
//                     <Navbar.Text>
//                         Signed in as: {props.user.username}
//                     </Navbar.Text>
//                     :
//                     <NavLink to="/login">Log In</NavLink>
//                 }

//             </Navbar.Collapse>
//         </Navbar>
//     )
// }

// function renderBar() {
//     if (useLocation() === "/login" || useLocation().pathname === "/signup") {
//         return (

//         )
//     }
// }

function msp(state) {
    return { user: state.user }
}

export default connect(msp)(Bar)