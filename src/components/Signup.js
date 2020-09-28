import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../redux/actions'
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
    }

    render() {
        return (
            <form className="login" onSubmit={this.submitHandler}>
                <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                <button>Sign Up</button>
            </form>
        )
    }
}

function mdp(dispatch) {
    return { signupUser: (userInfo) => dispatch(signupUser(userInfo)) }
}

export default connect(null, mdp)(Signup)