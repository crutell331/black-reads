import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import AuthorIndexContainer from './index/AuthorIndexContainer'
import AuthorShowPage from './show/AuthorShowPage'
function AuthorContainer(props) {
    return (
        <Switch>
            <Route path="/authors/:name" render={({ match }) => {
                console.log(match.params.name)
                let author = props.authors.find(author => author.name === match.params.name)
                console.log("author: ", author)
                return <AuthorShowPage author={author} />
            }} />
            <Route path="/authors" component={AuthorIndexContainer} />
        </Switch>
    )
}

function msp(state) {
    return { authors: state.authors }
}


export default connect(msp)(AuthorContainer)