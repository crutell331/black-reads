import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { passiveLoginUser } from './redux/actions'
import LandingPage from './containers/LandingPage';
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
        {/* <Route path="/" component={LandingPage} /> */}
        <LandingPage />
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
