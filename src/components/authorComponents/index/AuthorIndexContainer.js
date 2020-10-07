import React from 'react'
import { connect } from 'react-redux'
import AuthorCard from './AuthorCard'

class AuthorIndexContainer extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    renderAuthors = () => {
        return this.props.authors.filter((author) => author.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((author) => {
            return <AuthorCard key={author.id} author={author} />
        })


    }

    render() {
        return (
            <div className="author-container">
                <div className="author-search">
                    <input type="text" className="author-search-input" placeholder="Search Authors" value={this.state.searchTerm} onChange={this.changeHandler} />
                </div>
                <div className="author-list">
                    {this.renderAuthors()}
                </div>
            </div>
        )
    }
}

function msp(state) {
    return { authors: state.authors }
}

export default connect(msp)(AuthorIndexContainer)