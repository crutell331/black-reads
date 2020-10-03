import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBooks, passiveLoginUser, getCategories, getAuthors } from './redux/actions'
import LoginSignup from './containers/LoginSignup';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import './css/App.css';
import Navbar from './components/Navbar';
import BrowseContainer from './components/browseComponents/BrowseContainer';
import BookShowPage from './components/bookComponents/BookShowPage';
import AuthorShowPage from './components/authorComponents/AuthorShowPage';

class App extends React.Component {

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token) {
      this.props.loginUser(token)
      this.props.getBooks()
      this.props.getAuthors()
      this.props.getCategories()
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div className="app">
        <div className="background-img">
          <img className="background-img" src="https://c1.wallpaperflare.com/preview/397/1018/334/woman-female-hat-book.jpg" />
        </div>
        <Navbar />
        <Switch>
          <Route path="/login" render={() => {
            return (
              <LoginSignup />
            )
          }} />
          <Route path="/signup" render={() => {
            return (
              <LoginSignup />
            )
          }} />
          <Route path="/home" render={() => {
            return (
              <BrowseContainer />
            )
          }} />
          <Route path="/books" render={() => {
            return (
              <BookShowPage />
            )
          }} />
          <Route path="/authors" render={() => {
            return (
              <AuthorShowPage />
            )
          }} />

        </Switch>
      </div>
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
    getCategories: () => dispatch(getCategories()),
    getAuthors: () => dispatch(getAuthors())
  })
}

export default connect(msp, mdp)(withRouter(App));
