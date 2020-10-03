import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter, useLocation } from 'react-router-dom'
import { logoutUser } from '../redux/actions'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Bar extends React.Component {

    logoutHandler = () => {
        localStorage.clear()
        this.props.history.push("/login")
        this.props.logoutUser()
    }
    renderLoginSignup = () => {
        const location = this.props.history.location.pathname
        if (location === "/signup") {
            return <NavLink to="/login">Log In</NavLink>
        } else {
            return <NavLink to="/signup">Sign Up</NavLink>
        }
    }

    render() {

        return (
            <>
                <Navbar bg="dark" variant="dark" expand='sm' fixed="top" id="navbar">
                    <Navbar.Text >
                        <h1 id="navbar" >Black Reads</h1>
                    </Navbar.Text>

                    <Form inline onSubmit={console.log} style={{ marginLeft: "1%" }}>
                        <FormControl type="text" placeholder="Enter Author Name" className=" mr-sm-2" />
                    </Form>
                    <Form inline>
                        <FormControl type="text" placeholder="Enter Book Title" className=" mr-sm-2" />
                    </Form>
                    <NavDropdown title="Browse" id="collasible-nav-dropdown" >
                        <NavDropdown.Item href="/browse/categories">Categories</NavDropdown.Item>
                        <NavDropdown.Item href="/browse/themes">Themes</NavDropdown.Item>
                        <NavDropdown.Item href="/browse/lists">Reading Lists</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Collapse className="justify-content-end">
                        {this.props.user ?
                            <NavDropdown title={this.props.user.username} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                                <NavDropdown.Item href="/library">Library</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.logoutHandler}>Log Out</NavDropdown.Item>
                            </NavDropdown>

                            :
                            this.renderLoginSignup()
                        }

                    </Navbar.Collapse>
                </Navbar>


            </>

        )
    }
}

function msp(state) {
    return { user: state.user }
}
function mdp(dispatch) {
    return { logoutUser: () => dispatch(logoutUser()) }
}
export default connect(msp, mdp)(withRouter(Bar))