import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Wrapper, ImageCard, StyledCarousel, StyledImage } from './style'
import { Loader } from '../../../style/shared'

class Gallery extends Component {
    constructor() {
        super()
        this.state =  { widthLoaded: false, isMobile: false }
        this.setMobile = this.setMobile.bind(this)
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.setMobile()
            window.addEventListener('resize', this.setMobile)
        }
    }

    componentWillUnmount() {
        typeof window !== 'undefined' &&
        window.removeEventListener('resize', this.setMobile);
    }

    setWidthLoaded() {
        this.setState({ widthLoaded: true })
    }

    setMobile() {
        this.setState({
            isMobile: window.innerWidth < 480
        }, () => this.setWidthLoaded())
    }

    renderGalleryList({ image }) {
        const { id , source } = image
        return (
            <ImageCard key={id}>
                <StyledImage
                    alt={id}
                    loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
                    {...source}
                />
            </ImageCard>
        )
    }

    renderGalleryWrapper() {
        const { gallery } = this.props
        const { isMobile } = this.state
        const galleryList = gallery.map(this.renderGalleryList)
        return (
            isMobile
                ? <StyledCarousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    interval={10000}
                    autoPlay
                >
                    {galleryList}
                </StyledCarousel>
                : <Wrapper>{galleryList}</Wrapper>
        )
    }

    render() {
        const { widthLoaded } = this.state
        return widthLoaded && this.renderGalleryWrapper()
    }
}

export default Gallery
