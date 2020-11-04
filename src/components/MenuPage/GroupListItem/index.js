import React from 'react'
import { ListItem } from '../../../style/shared'
import {Wrapper, Name} from './style'

const GroupListItem = ({ name, company, description }) =>

    <ListItem>
        <Wrapper>
            <div className="name"><Name>{name}</Name> - <span>{company}</span></div>
            <div className="description">{description}</div>
        </Wrapper>
    </ListItem>

export default GroupListItem
