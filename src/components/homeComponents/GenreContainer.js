import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import CardDeck from 'react-bootstrap/CardDeck'
import GenreCard from './GenreCard'
import CategoryShow from './CategoryShow'

class GenreContainer extends React.Component {
    render() {
        return (
            <>
                {this.props.genres.length > 0 ? <>
                    <Switch>
                        <Route path="/genres/:name" render={(routerProps) => {
                            let name = routerProps.match.params.name
                            let category = this.props.categories.find(cat => cat.name === name)
                            return (
                                <CategoryShow category={category ? category : {}} />
                            )
                        }} />
                        <Route path="/genres" render={() => {
                            console.log("genre props", this.props.genres)
                            let that = this

                            function renderBooks(genre) {
                                return genre.books.map(book => {
                                    return (
                                        <div className="genre-card" key={book.title}>
                                            <img alt="book" className="book-img" src={book.img} />
                                            <h3 className="book-title">{book.title}</h3>
                                        </div>
                                    )
                                })
                            }
                            function renderGenreRows() {
                                return that.props.genres.map((genre) => {
                                    return (
                                        <div className="genre-row">
                                            <div className="genre-name">{genre.name}</div>
                                            <div className="genre-cards-deck">
                                                <div className="book-list">{renderBooks(genre)}</div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            // let cards = this.props.categories.map(cat => <GenreCard key={cat.name} category={cat} />)
                            return (
                                <div className="genre-rows-container">
                                    {renderGenreRows()}
                                </div>
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