import React from 'react'
import EmailLink from '../EmailLink'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const NavBar = () =>
    <Wrapper>
        {/* LEFT SIDE*/}
        <Nav>
            <NavItem>
                <a href="https://twitter.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-discord"/> </a>
            </NavItem>
            <NavItem>
                <a href="https://twitch.tv/ponchoclub" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitch"/> </a>
            </NavItem>
            <NavItem highlight><EmailLink text="hi@poncho.club" />
            </NavItem>
        </Nav>

        {/* RIGHT SIDE*/}
        <Nav>
            <NavItem>
                <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/menu'>Menu</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/gallery'>Gallery</NavLink>
            </NavItem>

        </Nav>
    </Wrapper>

export default NavBar;
