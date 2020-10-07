import React from 'react'
import { connect } from 'react-redux'
import { addLibraryBook } from '../../../redux/actions'
function AuthorShowBook({ book, addLibraryBook, username }) {
    function libraryClickHandler() {
        addLibraryBook(username, book.id)
    }
    return (
        <>
            <div className="author-show-book">
                <h2>{book.title}</h2>
                <img alt="book" src={book.img} />
                <span>
                    <button onClick={libraryClickHandler}>Add to Library</button>
                    {/* <button>Like</button> */}
                </span>
            </div>

        </>
    )
}

function msp(state) {
    console.log("state:", state)
    return { username: state.user.username }
}
function mdp(dispatch) {
    return {
        addLibraryBook: (username, book_id) => dispatch(addLibraryBook(username, book_id))
    }
}


export default connect(msp, mdp)(AuthorShowBook)