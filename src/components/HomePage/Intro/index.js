import React from 'react'
import { Wrapper, Title } from './style'

const Intro = props =>
    <Wrapper {...props} >
        <Title>
            <span className="name">PONCHO</span>
        </Title>
        <Title>
            <span className="day">Exodus - The Mist - Ward 4 - Plot 55</span>
            <br/>
            <span className="day">Every Other Saturday</span>
            <br/>
            <span className="time">10pm - Close (CST)</span>
        </Title>
    </Wrapper>

export default Intro
