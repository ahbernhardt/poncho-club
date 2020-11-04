import React from 'react'
import Navigation from './elements/Navigation'
import { GlobalStyle } from '../style/global'
import CircleCursor from "./elements/Cursor";

export default ({ children, location }) =>
    <main>
        <CircleCursor />
        <GlobalStyle />
        {children}
        <Navigation location={location}/>
    </main>
