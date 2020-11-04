import React, {Component} from 'react'
import Head from '../../elements/Head'
import { META } from '../../../utils/constants'
import { ContentWrapper } from '../../../style/shared'
import {GallerySection, Title} from "./style"
import {StyledCarousel} from "../../AboutPage/CurrentStaffSection/style";


export default class extends Component {

    render = () => {
        const gallery = get(this, 'props.data.allDataJson.edges')
        console.log(gallery)

        return (
            <ContentWrapper>
                <Head
                    {...META.gallery}
                    image={META.common.image}
                />

                <GallerySection>
                    <Title>
                        <span className="name">Gallery</span>
                    </Title>
                    {gallery.map(({node}) => {
                        return(
                            <img src={node.image} />
                        )
                    })}

                </GallerySection>
            </ContentWrapper>
        )
    }
}
