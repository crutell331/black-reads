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
        return (
            <>
                <div className="genre-card" key={book.title} onClick={this.showModal}>
                    <img alt="book" className="book-img" src={book.img} />
                    <h3 className="book-title">{book.title}</h3>
                </div>
                <div className="modal" style={{ display: this.state.display }}>
                    <div className="modal-content">
                        <span className="close" onClick={this.hideModal}>&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>

                </div>
            </>
        )
    }
}

export default FeaturedBook