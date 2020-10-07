import React from 'react'

function AuthorShowBook({ book }) {
    return (
        <>
            <div className="author-show-book">
                <h2>{book.title}</h2>
                <img alt="book" src={book.img} />
                <span>
                    <button>Add to Library</button>
                    <button>Like</button>
                </span>
            </div>

        </>
    )
}

export default AuthorShowBook