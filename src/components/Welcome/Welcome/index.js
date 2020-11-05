import React from 'react'
import Link from 'gatsby-link'
import Welcome from './Welcome.svg'
import { Wrapper } from './style'

const WelcomeMiddle = props =>
    <Wrapper {...props}>
            <div className="padding">
                <h1>
                    <Link to='/'><Welcome width={425} height={375} /></Link>
                </h1>
            </div>
    </Wrapper>

export default WelcomeMiddle
