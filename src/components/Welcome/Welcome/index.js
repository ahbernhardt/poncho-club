import React from 'react'
import Link from 'gatsby-link'
import Welcome from './Welcome.svg'
import { Wrapper } from './style'

const WelcomeMiddle = props =>
    <Wrapper {...props}>
            <div className="padding">
                <h1>
                    <Link to='/'><Welcome width={428} height={450} /></Link>
                </h1>
            </div>
    </Wrapper>

export default WelcomeMiddle
