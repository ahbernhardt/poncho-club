import React from 'react'
import { Wrapper, Title } from './style'

const Intro = props =>
    <Wrapper {...props} >
        <Title>
            <span className="name">PONCHO (Ward 4 - Plot 55 - MISTS - EXODUS)</span>
        </Title>
        <Title>
            <span className="day">Saturdays</span>
            <br/>
            <span className="time">10pm - Close (CST)</span>
        </Title>
    </Wrapper>

export default Intro
