import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
function CategoryCard(props) {
    return (
        <NavLink to={`/browse/categories/${props.category.name}`} className="itemCard">
            <Card className="bg-dark text-white">
                <Card.Img src="https://tedideas.files.wordpress.com/2020/06/final_booklist_black-writers.jpg?w=750" alt="Card image" className="image" />
                <Card.ImgOverlay className="cardText">
                    <Card.Title className="catCardTitle">{props.category.name}</Card.Title>
                </Card.ImgOverlay>
            </Card>

        </NavLink>
    )
}

export default CategoryCard