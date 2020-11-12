import React, {Component} from 'react'
import idx from "idx";
import Head from '../../elements/Head'
import { META } from '../../../utils/constants'
import { ContentWrapper } from '../../../style/shared'
import AboutIntroSection from "../AboutIntroSection";
import {StaffSection, Title} from "./style";
import CurrentStaffSection from "../CurrentStaffSection";


export default class extends Component {

    constructor(props) {
        super(props)
        this.state = { position: null }
        this.setPosition = this.setPosition.bind(this)
    }

    setPosition(position) {
        this.setState({ position })
    }

    getData() {
        const { data } = this.props
        return idx(data, _ => _.staffs.edges)
    }

    getStaffs() {
        const { position } = this.state
        const staffs = this.getData()

        return staffs &&
            staffs.filter(({ staff }) =>
                position
                    ? !staff.current && staff.position.includes(position)
                    : !staff.current
            )
    }

    getCurrentStaff() {
        const staffs = this.getData()
        return staffs && staffs.filter(({staff}) => staff.current)
    }

    render() {
        return (
            <ContentWrapper>
                <Head
                    {...META.about}
                    image={META.common.image}
                />

                <AboutIntroSection text="PONCHO"
                    content={() =>
                        <>
                            The club was constructed on top of the remains of a burned down factory. The factory itself was ironically burned down due to a massive rave that was thrown.
                             In the burned down rubble a scorched Poncho was found mostly intact giving the new club its namesake. Poncho (Now adhering to fire codes) stands as an epicenter of EDM and partying in Eorzea.
                            <br />
                            Poncho is a specialized Trance music venue that offers a sanctuary for partygoers and music lovers alike.
                        </>
                    }
                />

                <StaffSection>
                    <Title>
                        <span className="name">Our Staff</span>
                    </Title>
                    <CurrentStaffSection staffs={this.getCurrentStaff()}/>
                </StaffSection>


            </ContentWrapper>
        )
    }
}
