import React, {Component} from 'react'
import Head from '../elements/Head'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import {StreamSection, Title} from "./style"
import PageIntro from "../elements/PageIntro";
// import Video from "../elements/Video";



export default class extends Component {
    render = () => {

        return (
            <ContentWrapper>
                <Head
                    {...META.live}
                    image={META.common.image}
                />
                <StreamSection>
                    <PageIntro text="Live with PONCHO" />
                    <p>
                        <a href="https://www.twitch.tv/euphoricnation" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitch"/></a>
                        You can find us on Twitch
                    </p>
                    <iframe
                        src="https://player.twitch.tv/?video=546761743"
                        height="550"
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen
                        />

                    {/*<Title>*/}
                    {/*    <span className="name">Upcoming Schedule</span>*/}
                    {/*</Title>*/}
                </StreamSection>


            </ContentWrapper>
        )
    }
}
