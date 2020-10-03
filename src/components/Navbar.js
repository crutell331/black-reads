import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { logoutUser } from '../redux/actions'

class Bar extends React.Component {

    state = {
        userDisplay: "none",
        authorDisplay: "none",
        genresDisplay: "none",
        themesDisplay: "none"
    }

    logoutHandler = () => {
        localStorage.clear()
        this.props.logoutUser()
    }

    showUserDisplay = () => {
        this.setState((prevState) => (
            prevState.userDisplay === "none" ? { authorDisplay: "none", genresDisplay: "none", themesDisplay: "none", userDisplay: "block" } : { authorDisplay: "none", genresDisplay: "none", themesDisplay: "none", userDisplay: "none" }
        ))
    }
    showAuthorDisplay = () => {
        this.setState((prevState) => (
            prevState.authorDisplay === "none" ? { authorDisplay: "block", genresDisplay: "none", themesDisplay: "none", userDisplay: "none" } : { authorDisplay: "none", genresDisplay: "none", themesDisplay: "none", userDisplay: "none" }
        ))
    }
    showGenreDisplay = () => {

        this.setState((prevState) => (
            prevState.genresDisplay === "none" ? { authorDisplay: "none", genresDisplay: "block", themesDisplay: "none", userDisplay: "none" } : { authorDisplay: "none", genresDisplay: "none", themesDisplay: "none", userDisplay: "none" }
        ), () => console.log(this.state.genresDisplay))
    }

    sortAndRenderGenres = () => {
        function nameSort(g1, g2) {
            if (g1.name < g2.name) { return -1; }
            if (g1.name > g2.name) { return 1; }
            return 0;
        }
        if (this.props.genres) {
            return this.props.genres.sort((genre1, genre2) => nameSort(genre1, genre2)).map(genre => {
                return (
                    <div key={genre.name}>
                        <a href={`/genres/${genre.name}`} className="dropdown-item">{genre.name}</a>
                    </div>
                )
            })
        }
    }
    renderGenresItem = () => {
        return this.props.user ? (
            <div className="navbar-user-items" onClick={this.showGenreDisplay} >
                <p>Genres</p>
                <div className="navbar-user-dropdown" style={{ display: this.state.genresDisplay }}>
                    <div className="user-dropdown-content">
                        {this.sortAndRenderGenres().slice(0, 4)}
                        <div>
                            <a href="/authors" onClick={this.logoutUser} className="dropdown-item">More...</a>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    }
    sortAndRenderAuthors = () => {
        function nameSort(a1, a2) {
            if (a1.name < a2.name) { return -1; }
            if (a1.name > a2.name) { return 1; }
            return 0;
        }
        if (this.props.authors) {
            return this.props.authors.sort((author1, author2) => nameSort(author1, author2)).map(author => {
                return (
                    <div key={author.name}>
                        <a href={`/authors/${author.name}`} className="dropdown-item">{author.name}</a>
                    </div>
                )
            })
        }
    }
    renderAuthorsItem = () => {
        return this.props.user ? (
            <div className="navbar-user-items" onClick={this.showAuthorDisplay} >
                <p>Authors</p>
                <div className="navbar-user-dropdown" style={{ display: this.state.authorDisplay }}>
                    <div className="user-dropdown-content">
                        {this.sortAndRenderAuthors().slice(0, 4)}
                        <div>
                            <a href="/authors" onClick={this.logoutUser} className="dropdown-item">More...</a>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    }

    renderUser = () => {
        return this.props.user ? (
            <div className="navbar-user-items" onClick={this.showUserDisplay} >
                <p>Logged In As: {this.props.user.username}
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
        ) : null
    }

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
                        <p>Home</p>
                        {this.renderGenresItem()}
                        {this.renderAuthorsItem()}
                        <p>Themes</p>
                    </div>
                    {this.renderUser()}

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
    return {
        user: state.user,
        genres: state.categories,
        authors: state.authors
    }
}
function mdp(dispatch) {
    return { logoutUser: () => dispatch(logoutUser()) }
}
export default connect(msp, mdp)(withRouter(Bar))

