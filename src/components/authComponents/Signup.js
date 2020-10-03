import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signupUser } from '../../redux/actions'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class Signup extends React.Component {
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
        this.props.signupUser(this.state)
        this.setState({ username: "", password: "" })
        this.props.history.push("/browse/categories")

    }

    render() {
        return (
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
                        <Button type="submit">Sign Up</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}

function mdp(dispatch) {
    return { signupUser: (userInfo) => dispatch(signupUser(userInfo)) }
}

export default connect(null, mdp)(withRouter(Signup))