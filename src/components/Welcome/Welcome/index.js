import React from 'react'
// import Link from 'gatsby-link'
// import Welcome from './Welcome.svg'
// import { Wrapper } from './style'
import {ContentWrapper} from "../../../style/shared";
import {TwitchSection} from "./style";

const WelcomeMiddle = () =>
    // <ContentWrapper>
        <TwitchSection>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe src="https://player.twitch.tv/?channel=ponchoclub&parent=poncho.club"
                    frameBorder="0"
                    allowFullScreen="true"
                    scrolling="no"
            >
            </iframe>
        </TwitchSection>
    // </ContentWrapper>

export default WelcomeMiddle
