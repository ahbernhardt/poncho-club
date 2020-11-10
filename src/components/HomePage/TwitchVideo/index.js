import React from 'react'
import {TwitchSection} from "./style";

const WelcomeMiddle = () =>
        <TwitchSection>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
                src="https://player.twitch.tv/?channel=ponchoclub&parent=poncho.club"
                // src="https://player.twitch.tv/?channel=ponchoclub&parent=localhost"
                    frameBorder="0"
                    allowFullScreen="true"
                    scrolling="no"
            >
            </iframe>
        </TwitchSection>

export default WelcomeMiddle
