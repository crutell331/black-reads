import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { passiveLoginUser } from './redux/actions'
import LoginSignup from './containers/LoginSignup';
import './css/App.css';

class App extends React.Component {

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      this.props.loginUser(token)
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    console.log(this.props.user)
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginSignup} />
          <Route path="/signup" component={LoginSignup} />

        </Switch>
        {/* <LandingPage /> */}
      </div>
    );

  }
}

function msp(state) {
  return { user: state.user }
}
function mdp(dispatch) {
  return { loginUser: (token) => dispatch(passiveLoginUser(token)) }
}

export default connect(msp, mdp)(withRouter(App));
