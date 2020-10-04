import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)
        this.setState({ username: "", password: "" })
        this.props.history.push("/home")
    }

    render() {
        return (
            <div className="form">
                <Form id="loginSignup" onSubmit={this.submitHandler}>
                    <Form.Group as={Row}>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="username" name="username" value={this.state.username} onChange={this.changeHandler} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="passwords" name="password" value={this.state.password} onChange={this.changeHandler} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col>
                            <Button type="submit">Log in</Button>
                        </Col>
                    </Form.Group>
                    <div className="form-text">
                        <p>New to Black Reads?</p><NavLink to='/signup'>Sign Up</NavLink>
                    </div>
                </Form>
            </div>
        )
    }
}

function mdp(dispatch) {
    return { loginUser: (userInfo) => dispatch(loginUser(userInfo)) }
}

export default connect(null, mdp)(withRouter(Login))