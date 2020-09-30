import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import BookCard from './BookCard'

// Wondering if this would be better performant if I just make a fetch call with the book name. Once API grows larger it may not be feasible to hold entire list of books in Redux store. 
// Could refactor so that only the featured books and featured authors get stored in Redux and everything else requires an AJAX request

function BookShowPage(props) {
    const title = useLocation().pathname.split('/')[2]
    const book = props.books.find((book) => book.title === title)
    console.log(book)
    return (
        <BookCard book={book} />
    )
}

function msp(state) {

    return { books: state.books }
}

export default connect(msp)(BookShowPage)