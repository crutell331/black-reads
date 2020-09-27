import React from 'react'

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }

    render() {
        return (
            <form className="login">
                <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} />
                <button>Log In</button>
            </form>
        )
    }
}

export default Login