import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function CarouselCard(props) {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-saAoVxRu15I17Thd46Y7hEXWD-EXoqFKPA&usqp=CAU"}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default CarouselCard

    // < Carousel.Item >
    //         <img
    //             className="d-block w-100"
    //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAN3tbv-1teijlGN86zeTzGO7K0kVIOjZDmg&usqp=CAU"
    //             alt="First slide"
    //         />
    //         <Carousel.Caption>
    //             <h3>First slide label</h3>
    //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //         </Carousel.Caption>
    //     </Carousel.Item >