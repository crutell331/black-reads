import React from 'react'
import BookCard from '../../bookComponents/BookCard'
import AuthorShowBook from './AuthorShowBook'
function AuthorShowPage(props) {
    console.log(props.author)
    function renderBooks() {
        return props.author.books.map(book => <AuthorShowBook key={book.title} book={book} />)
    }
    return (
        <>
            {props.author ?
                <div className="author-show-container">
                    <div className="bio-container">
                        <h3>{props.author.name}</h3>
                        <img alt="author" src={props.author.img} />
                        <p>{props.author.bio}</p>
                    </div>
                    <div className="author-book-list">
                        {renderBooks()}
                    </div>
                </div>

                : null
            }
        </>
    )
}


export default AuthorShowPage