import React from 'react'

function FeaturedBook({ book }) {
    return (
        //Takes the book and prints to DOM
        <div className="genre-card" key={book.title}>
            <img alt="book" className="book-img" src={book.img} />
            <h3 className="book-title">{book.title}</h3>
        </div>
    )
}

export default FeaturedBook