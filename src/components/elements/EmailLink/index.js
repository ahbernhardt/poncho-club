import React from 'react'
import PropTypes from 'prop-types'

const EmailLink = ({ className, text }) =>
    <a className={className} rel="noopener" href='mailto:dylanbernhardt@protonmail.com'>{text}</a>

EmailLink.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
}

EmailLink.defaultProps = {
    className: ''
}

export default EmailLink
