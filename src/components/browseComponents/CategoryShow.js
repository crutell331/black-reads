import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

function CategoryShow(props) {
    let carouselCards = []
    if (props.category.books) {
        carouselCards = props.category.books.map(item => {
            return (
                <Carousel.Item key={item.id} interval={1000} >
                    <img
                        className="d-block w-100"
                        src={item.img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }
    console.log(carouselCards)
    return (
        <Carousel className="carousel">
            {carouselCards}
        </Carousel>
    )
}

export default CategoryShow

        // < CarouselContainer items={props.category ? props.category.books : []} />
