import React from 'react'

class FeaturedBook extends React.Component {
    state = {
        display: "none"
    }
    showModal = () => {
        this.setState(() => {
            return { display: "block" }
        })
    }
    hideModal = () => {
        this.setState(() => {
            return { display: "none" }
        })
    }
    render() {
        let { book } = this.props
        // console.log(book)
        return (
            <>
                <div className="genre-card" key={book.title} onClick={this.showModal}>
                    <img alt="book" className="book-img" src={book.img} />
                    <h3 className="book-title">{book.title}</h3>
                </div>
                <div className="modal" style={{ display: this.state.display }}>
                    <div className="modal-content">
                        <span className="modal-close" onClick={this.hideModal}><span className="modal-close-text">&times;</span></span>
                        <span className="modal-book-info">
                            <h2>{book.title}</h2>
                            <h4 className="modal-author">By: {book.author_name}</h4>
                            <p>{book.summary}</p>
                        </span>
                        <img alt="book" className="modal-img" src={book.img} />
                        <div className="modal-buttons">
                            <button>Add to Library</button>
                            <button>Like</button>
                        </div>
                        {/* <p>Some text in the Modal..</p> */}
                        <h1></h1>
                    </div>

                </div>
            </>
        )
    }
}

export default FeaturedBook