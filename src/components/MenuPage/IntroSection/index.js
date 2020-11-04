import React from 'react'
import Intro from '../../Welcome/Intro'
import { Wrapper, InfoWrapper, Content} from './style'

const MenuIntroSection = ({ content }) =>
    <Wrapper>
        <InfoWrapper>
            <Intro fixed={false} />
            <Content>{content()}</Content>
        </InfoWrapper>
    </Wrapper>

export default MenuIntroSection
