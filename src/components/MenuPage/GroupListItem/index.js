import React from 'react'
import { ListItem } from '../../../style/shared'
import {Wrapper, Name} from './style'

const GroupListItem = ({ name, price, description }) =>

    <ListItem>
        <Wrapper>
            <div className="name"><Name>{name}</Name> - <span>{price}</span></div>
            <div className="description"><Name>{name}</Name>: {description} </div>
        </Wrapper>
    </ListItem>

export default GroupListItem
