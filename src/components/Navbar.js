import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { logoutUser } from '../redux/actions'
// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

class Bar extends React.Component {

    state = {
        userDisplay: "none"
    }

    logoutHandler = () => {
        localStorage.clear()
        // this.props.history.push("/login")
        this.props.logoutUser()
    }

    showUserDisplay = () => {
        this.setState((prevState) => (
            prevState.userDisplay === "none" ? { userDisplay: "block" } : { userDisplay: "none" }
        ))
    }
    // hideUserDisplay = () => {
    //     this.setState({ userDisplay: "none" })
    // }

    renderLoginSignup = () => {
        const location = this.props.history.location.pathname
        if (location === "/signup" || location === "/login") {
            return (
                <div className="navbar">
                    <h2>BlackReads</h2>
                </div>)
        } else {
            return (
                <div className="navbar">
                    <h2>BlackReads</h2>
                    <div className="navbar-items">
                        <p >Home</p>
                        <p >Genres</p>
                        <p >Authors</p>
                        <p >Themes</p>
                    </div>
                    {this.props.user ? (
                        <div className="navbar-user-items" onClick={this.showUserDisplay} >
                            <p >Logged In As: {this.props.user.username}
                                <i className="fa fa-caret-down"></i>
                            </p>
                            <div className="navbar-user-dropdown" style={{ display: this.state.userDisplay }}>
                                <div className="user-dropdown-content">
                                    <div>
                                        <NavLink to="/library" className="dropdown-item">Library</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/account" className="dropdown-item">Account</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/login" onClick={this.logoutUser} className="dropdown-item">Log Out</NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ) : null}

                </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderLoginSignup()}
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


/*
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
*/
