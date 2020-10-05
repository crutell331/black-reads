import React from 'react'

function AuthorCard({ author }) {
    return (
        <div className="author-index-card">
            <img alt="author-card" src={author.img} className="author-index" />
            <h5 className="author-index">{author.name}</h5>
        </div>
    )
}

export default AuthorCard