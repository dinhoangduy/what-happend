import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
    document.title = "What happend - " + props.title

    return (
        <>
            {props.children}
        </>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet