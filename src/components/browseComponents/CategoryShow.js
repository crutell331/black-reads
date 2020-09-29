import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function CategoryShow(props) {
    let bookCarouselCards = []
    let authorCarouselCards = []
    function renderCarouselCards() {
        if (props.category.books) {
            bookCarouselCards = props.category.books.map(book => {
                return (
                    <Carousel.Item key={book.id} interval={1000} >
                        <img
                            className="carouselImg"
                            src={book.img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="caption">{book.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
        return bookCarouselCards
    }

    function renderAuthorCarouselCards() {
        if (props.category.books) {
            authorCarouselCards = props.category.authors.map(author => {
                console.log(author)
                return (
                    <Carousel.Item key={author.id} interval={1000} >
                        <img
                            className="carouselImg"
                            src={author.img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="caption">{`${author.firstname} ${author.lastname}`}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
        return authorCarouselCards
    }




    return (
        <>
            <div className="carouselLabels">
                <h3 >Featured Books</h3>
                <h3 style={{ "marginRight": "4%" }}>Featured Authors</h3>
            </div>
            <Carousel >
                {renderCarouselCards()}
            </Carousel>
            <Carousel >
                {renderAuthorCarouselCards()}
            </Carousel>
        </>
    )
}

export default CategoryShow

        // < CarouselContainer items={props.category ? props.category.books : []} />
