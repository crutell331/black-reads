import React from 'react'
import { NavLink } from 'react-router-dom'
function AuthorCard({ author }) {
    return (
        <NavLink to={`/authors/${author.name}`}>

            <div className="author-index-card">
                <img alt="author-card" src={author.img} className="author-index" />
                <h5 className="author-index">{author.name}</h5>
            </div>
        </NavLink>
    )
}

export default AuthorCard