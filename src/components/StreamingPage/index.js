import React, {Component} from 'react'
import Head from '../elements/Head'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import {StreamSection} from "./style"
import PageIntro from "../elements/PageIntro";


export default class extends Component {
    render = () => {
        return (
            <ContentWrapper>
                <Head
                    {...META.stream}
                    image={META.common.image}
                />
                <StreamSection>
                    <PageIntro text="Live Streaming" />
                </StreamSection>


            </ContentWrapper>
        )
    }
}
