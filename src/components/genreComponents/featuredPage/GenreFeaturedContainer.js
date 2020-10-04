import React from 'react'
import GenreRow from './GenreRow'
import { connect } from 'react-redux'
function GenreFeaturedContainer(props) {
    let genres = props.genres.map((genre) => <GenreRow key={genre.name} genre={genre} />)
    return (
        <div className="genre-rows-container">
            {/* render a genrerow for each genre */}
            {genres}
        </div>
    )
}
function msp(state) {
    return { genres: state.genres }
}
export default connect(msp)(GenreFeaturedContainer)