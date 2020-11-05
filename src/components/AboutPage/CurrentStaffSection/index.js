import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Wrapper, StaffCurrent, Name, Position, Description, StyledCarousel, StyledImage } from './style'
import { Loader } from '../../../style/shared'

class CurrentStaffSection extends Component {
  constructor() {
    super()
    this.state =  { widthLoaded: false, isMobile: false }
    this.setMobile = this.setMobile.bind(this)
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setMobile()
      window.addEventListener('resize', this.setMobile)
    }
  }

  componentWillUnmount() {
    typeof window !== 'undefined' &&
    window.removeEventListener('resize', this.setMobile);
  }

  setWidthLoaded() {
    this.setState({ widthLoaded: true })
  }

  setMobile() {
    this.setState({
      isMobile: window.innerWidth < 480
    }, () => this.setWidthLoaded())
  }

  renderStaffsList({ staff }) {
    const { title ,image, name, position, description } = staff
    return (
      <StaffCurrent key={title}>
        <StyledImage
          alt={title}
          loader={({ isLoaded }) => <Loader isLoaded={isLoaded} />}
          {...image}
        />
        <Name>{name}</Name>
        <div className="position"><Position>Position:</Position> <span>{position}</span></div>
        <div className="description"><Description>Description:</Description> <span>{description}</span><br/></div>
      </StaffCurrent>
    )
  }

  renderStaffsWrapper() {
    const { staffs } = this.props
    const { isMobile } = this.state
    const staffsList = staffs.map(this.renderStaffsList)
    return (
      isMobile
      ? <StyledCarousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          interval={10000}
          autoPlay
        >
          {staffsList}
        </StyledCarousel>
      : <Wrapper>{staffsList}</Wrapper>
    )
  }

  render() {
    const { widthLoaded } = this.state
    return widthLoaded && this.renderStaffsWrapper()
  }
}

export default CurrentStaffSection
