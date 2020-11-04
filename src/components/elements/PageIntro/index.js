import React from 'react'
import { Wrapper, Title } from './style'

const PageIntro = ({ className, text }) =>
    <Wrapper >
        <Title className={className}>{text}
        </Title>
    </Wrapper>

export default PageIntro
