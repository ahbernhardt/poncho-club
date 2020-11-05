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

                <AboutIntroSection
                    content={() =>
                        <>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            <br />
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
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
