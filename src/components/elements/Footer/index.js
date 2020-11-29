import React from 'react'
import { getCurrentYear } from '../../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
    <Wrapper>
        <Item position='left'>
            {getCurrentYear()} <span>©</span> PONCHO
        </Item>
        <Item position='right'>
            <a target="_blank" rel="noopener noreferrer" href='https://twitch.tv/euphoricnation'>Our TV Channel</a>
        </Item>
    </Wrapper>

export default Footer
