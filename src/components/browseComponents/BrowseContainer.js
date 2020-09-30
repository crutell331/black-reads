import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import CardDeck from 'react-bootstrap/CardDeck'
import CategoryCard from './CategoryCard'
import CategoryShow from './CategoryShow'

class BrowseContainer extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/browse/categories/:name" render={(routerProps) => {
                    let name = routerProps.match.params.name
                    let category = this.props.categories.find(cat => cat.name === name)
                    return (
                        <CategoryShow category={category ? category : {}} />
                    )
                }} />
                <Route path="/browse" render={() => {
                    let cards = this.props.categories.map(cat => <CategoryCard key={cat.name} category={cat} />)
                    return (
                        <CardDeck id="catCardDeck">
                            {cards}
                        </CardDeck>
                    )
                }} />
            </Switch>
        )
    }
}

function msp(state) {
    return { books: state.books, categories: state.categories }
}

export default connect(msp)(BrowseContainer)