import React, {Component} from 'react'
import { TwitchStream } from 'react-twitch-stream';
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
                    {...META.live}
                    image={META.common.image}
                />
                <StreamSection>
                    <PageIntro text="Live with PONCHO" />
                    <p>
                        <a href="https://www.twitch.tv/dylanbernhardt" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitch"/></a>
                        You can find us on Twitch
                    </p>

                <TwitchStream allowFullScreen={true} autoPlay={true} muted={false} channelName='dylanbernhardt'/>


                </StreamSection>


            </ContentWrapper>
        )
    }
}
