import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBooks, passiveLoginUser, getCategories } from './redux/actions'
import LoginSignup from './containers/LoginSignup';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import './css/App.css';
import Navbar from './components/authComponents/Navbar';
import BrowseContainer from './components/browseComponents/BrowseContainer';
import BookShowPage from './components/bookComponents/BookShowPage';

class App extends React.Component {

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      this.props.loginUser(token)
      this.props.getBooks()
      this.props.getCategories()
    } else {
      this.props.history.push('/signup')
    }
  }

  render() {
    return (
      <Container fluid>
        <Row id="navRow">
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Switch>
          <Route path="/login" render={() => {
            return (
              <Row>
                <Col>
                  <LoginSignup />
                </Col>
              </Row>
            )
          }} />
          <Route path="/signup" render={() => {
            return (
              <Row>
                <Col>
                  <LoginSignup />
                </Col>
              </Row>
            )
          }} />
          <Route path="/browse" render={() => {
            return (
              <Row>
                <Col>
                  <BrowseContainer />
                </Col>
              </Row>
            )
          }} />
          <Route path="/books" render={() => {
            return (
              <Row>
                <Col>
                  <BookShowPage />
                </Col>
              </Row>
            )
          }} />

        </Switch>
        {/* <LandingPage /> */}
      </Container>
    );

  }
}

function msp(state) {
  return { user: state.user }
}
function mdp(dispatch) {
  return ({
    loginUser: (token) => dispatch(passiveLoginUser(token)),
    getBooks: () => dispatch(getBooks()),
    getCategories: () => dispatch(getCategories())
  })
}

export default connect(msp, mdp)(withRouter(App));
