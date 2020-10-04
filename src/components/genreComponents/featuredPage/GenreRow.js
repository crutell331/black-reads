import React from 'react'
import FeaturedBook from './FeaturedBook'

function GenreRow({ genre }) {
    function renderBooks() {
        return genre.books_with_authors.map(book => <FeaturedBook key={book.title} book={book} />)
    }
    return (
        // Takes the genre and creates a row with all of the books from that genre
        <div className="genre-row">
            <div className="genre-name">{genre.name}</div>
            <div className="genre-cards-deck">
                <div className="book-list">{renderBooks()}</div>
            </div>
        </div>
    )
}

export default GenreRow