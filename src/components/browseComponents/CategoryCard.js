import React from 'react'
import Card from 'react-bootstrap/Card'
function CategoryCard(props) {
    console.log("info card props: ", props)
    return (
        <Card className="bg-dark text-white" id="itemCard">
            <Card.Img src={props.category.img} alt="Card image" className="image" />
            <Card.ImgOverlay className="cardBody">
                <Card.Title className="catCardTitle">{props.category.name}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CategoryCard