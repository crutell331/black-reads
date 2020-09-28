import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Switch, Route, useLocation } from 'react-router-dom'
import CardDeck from 'react-bootstrap/CardDeck'
import CategoryCard from './CategoryCard'

function BrowseContainer(props) {
    console.log(props.categories)
    return (
        <Switch>
            <Route path="/browse" render={() => {
                let cards = props.categories.map(cat => <CategoryCard key={cat.name} category={cat} />)
                return (
                    <CardDeck id="catCardDeck">
                        {cards}
                    </CardDeck>
                )
            }} />
        </Switch>
    )
}

function msp(state) {
    return { books: state.books, categories: state.categories }
}

export default connect(msp)(BrowseContainer)