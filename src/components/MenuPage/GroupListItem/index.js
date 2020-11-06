import React from 'react'
import { ListItem } from '../../../style/shared'
import {Wrapper, Name} from './style'

const GroupListItem = ({ name, recommended, company, description }) =>

    <ListItem>
        <Wrapper>
            <div className="name"><Name>{name}</Name> - <span>{company}</span><span>{recommended}</span></div>
            <div className="description">{description}</div>
        </Wrapper>
    </ListItem>

export default GroupListItem
