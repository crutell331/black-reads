import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function AuthorCard({ author }) {
    console.log(author)
    function renderBook() {
        if (author) {
            return (
                <div className="book-show">
                    <h2 style={{ color: "white" }}>{author.name}</h2>
                    <div className="nested-flex">
                        <Image src={author.img} rounded className="book-img" />
                        <span className="buttons-container">
                            <div>
                                <Button type="submit">Favorite</Button><br />
                            </div>
                            <div>
                                <Button type="submit">Add To Library</Button>
                            </div>
                        </span>
                    </div>
                    <p className="summary">{`${author.bio}`}</p>

                </div>



            )
        }
    }
    return (
        <>
            {renderBook()}
        </>

    )
}

export default AuthorCard 