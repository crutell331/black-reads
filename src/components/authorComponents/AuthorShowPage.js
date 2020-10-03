import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import AuthorCard from './AuthorCard'


function AuthorShowPage(props) {
    const name = useLocation().pathname.split('/')[2]
    const author = props.authors.find((author) => author.name === name)
    console.log("Author show")
    return (
        <AuthorCard author={author} />
    )
}

function msp(state) {
    return { authors: state.authors }
}

export default connect(msp)(AuthorShowPage)