import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
function BookCard(props) {
    return (
        <NavLink to={`/browse/books/${props.book.name}`} className="itemCard">
            <Card className="bg-dark text-white">
                <Card.Img src={props.book.cover_img} alt="Card image" className="image" />
                <Card.ImgOverlay className="cardText">
                    <Card.Title className="catCardTitle">{props.book.name}</Card.Title>
                </Card.ImgOverlay>
            </Card>

        </NavLink>
    )
}

export default BookCard 