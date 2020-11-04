import React, { Component } from 'react'

class Image extends Component {
    state = { isLoaded: false }

    setLoaded() {
        this.setState({ isLoaded: true })
    }

    render() {
        const { src, alt, className, loader } = this.props
        const { isLoaded } = this.state
        return (
            <picture className={className}>
                {loader && loader({ isLoaded })}
                <img onLoad={() => this.setLoaded()} src={src} alt={alt} />
            </picture>
        )
    }
}


Image.defaultProps = {
    alt: '',
    sources: { media: null },
    className: null
}

export default Image
