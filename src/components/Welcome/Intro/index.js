import React from 'react'
import { Wrapper, Title } from './style'

const Intro = props =>
    <Wrapper {...props} >
        <Title>
            <span className="name">PONCHO</span>
            <br/>
            Saturdays
            <br/>
            9pm - Close
            (CST)
        </Title>
    </Wrapper>

export default Intro
