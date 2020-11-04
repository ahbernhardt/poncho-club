import React, {Component} from 'react'
import Head from '../../elements/Head'
import { META } from '../../../utils/constants'
import { ContentWrapper } from '../../../style/shared'
import {GallerySection} from "./style"
import PageIntro from "../../elements/PageIntro";
import Gallery from "../Gallery";
import idx from "idx";


export default class extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { title: null }
    //     this.setTitle = this.setTitle.bind(this)
    // }


    getData() {
        const { data } = this.props
        return idx(data, _ => _.gallery.edges)
    }


    getGallery() {
        const gallery = this.getData()
        return gallery && gallery.filter(({image}) => image.forGallery)
    }

    render = () => {
        return (
            <ContentWrapper>
                <Head
                    {...META.gallery}
                    image={META.common.image}
                />

                <GallerySection>
                    <PageIntro text="Gallery" />
                    <Gallery gallery={this.getGallery()} />
                </GallerySection>
            </ContentWrapper>
        )
    }
}
