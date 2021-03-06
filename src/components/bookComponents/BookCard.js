import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function BookCard(props) {
    console.log(props.book)
    function renderBook() {
        if (props.book) {
            return (
                <div className="book-show">
                    <div className="nested-flex">
                        <Image src={props.book.img} rounded className="book-img" />
                        <span className="buttons-container">
                            <div>
                                <Button type="submit">Favorite</Button><br />
                            </div>
                            <div>
                                <Button type="submit">Add To Library</Button>
                            </div>
                        </span>
                    </div>
                    <p className="summary">{`${props.book.summary}`}</p>

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

export default BookCard 