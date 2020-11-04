import React, { Component } from 'react'
import Logo from '../Logo'
import Footer from '../Footer'
import NavBar from '../NavBar'
import ToggleMenu from '../ToggleMenu'
import { Wrapper, Header, Shoable } from './style'

class Navigation extends Component {
    constructor() {
        super()
        this.state = { open: false }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({ open: !this.state.open })
    }

    componentDidUpdate(prevProps, prevState, sna) {
        const { location } = this.props

        if (location.pathname !== prevProps.location.pathname) {
            this.setState({ open: false })
        }
    }

    render() {
        const { open } = this.state
        return (
            <Wrapper>
                <Header>
                    <Logo />
                    <ToggleMenu
                        open={open}
                        onClick={this.toggleMenu}
                    />
                </Header>
                <Shoable open={open}>
                    <div>
                        <NavBar />
                        <Footer />
                    </div>
                </Shoable>
            </Wrapper>
        )
    }
}

export default Navigation
