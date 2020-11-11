import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import Image from '../../elements/Image'
import { media, colors } from '../../../style/constants'


export const StaffCurrent = styled.article`
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, .35);
  transform: translateY(0);
  transition: all .3s cubic-bezier(.45, 0, .1, 1);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: box-shadow, transform;
   
  .position{
    color: ${colors.gray500};
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
  
  .description{
    color: ${colors.gray500};
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
  
  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .35);
  }

  ${media.sm`
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, .35);
    margin-bottom: 25px;
    transform: translateY(0);
    
    &:hover {
      box-shadow: none;
      transform: translateY(0);     
    }
  `}
`

export const StyledImage = styled(Image)`
  display: block;
  position: relative;
  background: #242e3a;
  
  
  &::before {
    content: '';
    padding-top: 74%;
    display: block;
    ${media.sm`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    display: block;
    margin: auto;
    width: 100%;
    height: 100%;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    object-fit: cover;
    z-index: 1;
  }
`
export const Name = styled.h2`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;

  &::after {
    content: '';
    width: 1rem;
    height: 1px;
    background: ${colors.neon500};
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`
export const Position = styled.span`
    border-bottom: 1px dotted ${colors.gray700};
`
export const Description = styled.span`
   border-bottom: 1px dotted ${colors.gray700};
   margin-bottom: 1rem;
`
export const Wrapper = styled.section`
  width: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin-bottom:50px;
  
  ${media.xxl`
      width: 1200px;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
  `}
  
  ${media.xl`
      width: 800px;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
  `}

  ${media.lg`
    width: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  `}
  
  ${media.md`
    width: 600px;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
  `}
  
  ${media.sm`
    width: 400px;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
  `}
  
  ${media.xs`
    width: 325px;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1rem;
  `}
`

export const StyledCarousel = styled(Carousel)`
  width: 310px;
  box-shadow: 0 10px 30px rgba(19, 27, 37, .4);
  overflow: hidden;
  border-radius: 2px;
  margin-top: -25px;
  margin-bottom: 25px;
  
  .carousel {
    .slide {
      background: transparent;
    }

    .control-dots {
      margin: 35px auto 5px auto;
      
      .dot {
        box-shadow: none;
        height: 1px;
        width: 2rem;
        margin: 0 .5rem;
        border-radius: 0;
      }
    }
  }
  
  ${media.sm`
    width: 310px;
  `}
  
  ${media.xs`
    width: 290px;
  `}
`
