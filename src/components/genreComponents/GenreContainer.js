import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import GenreFeaturedContainer from './featuredPage/GenreFeaturedContainer'

class GenreContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.genres.length > 0 ? <>
                    <Switch>
                        <Route path="/genres/featured" component={GenreFeaturedContainer} />
                        <Route path="/genres/:name" render={(routerProps) => {
                            let name = routerProps.match.params.name
                            let category = this.props.categories.find(cat => cat.name === name)
                            return (
                                <h1></h1>
                            )
                        }} />
                    </Switch>

                </> : <h1>Loading</h1>}
            </>
        )
    }
}

function msp(state) {
    return { books: state.books, genres: state.genres }
}

export default connect(msp)(GenreContainer)