import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions'
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
        this.props.loginUser(this.state)
        this.setState({ username: "", password: "" })
    }

    render() {
        return (
            <form className="login" onSubmit={this.submitHandler}>
                <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                <button>Log In</button>
            </form>
        )
    }
}

function mdp(dispatch) {
    return { loginUser: (userInfo) => dispatch(loginUser(userInfo)) }
}

export default connect(null, mdp)(Signup)