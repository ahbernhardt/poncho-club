import styled, { css } from 'styled-components'
import { colors, media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
  font-size: 1.3rem;
  max-width: 45rem;
  line-height: 1.3em;
  
  ${media.xl`
    max-width: 36rem;
  `}
  
  ${media.lg`
    max-width: 32rem;
  `}
  
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 95%;
    font-size: 1.1rem;
  `}
  ${media.xs`
    font-size: 1.1rem;
    line-spacing: 1rem;
  `}

  ${props => props.fixed
    ? css`
      ${getOuterSpace('padding')};
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      color: ${colors.gray500};
      ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
    `
    : css`
      text-align: left;
    `
}
`

export const Title = styled.h1`
  margin-bottom: 5px; 
  
  .name {
    color: ${colors.neon500};
    font-weight: 700;
    font-size: 32px;
  }
  
  .day {
    line-height: 15px;
    color: ${colors.gray500};
    font-size: 24px;
  }
  
  .time {
    line-height: 15px;
    color: ${colors.gray500};
    font-size: 24px;
  }

  
  ${media.xxl`
  
    .name{
        font-size: 64px;
    }
    
    .day {
      line-height: 42px;
      font-size: 36px;
    }
  
    .time {
      line-height: 42px;
      font-size:36px;
    }
  `} 
  
  ${media.xl`

    .name{
        font-size: 28px;
    }
    
    .day {
      line-height: 28px;
      font-size: 24px;
    }
  
    .time {
      line-height: 28px;
      font-size: 24px;
    }
  `} 
  
  ${media.lg`

    .name{
        font-size: 28px;
    }
    
    .day {
      line-height: 28px;
      font-size: 24px;
    }
  
    .time {
      line-height: 28px;
      font-size: 24px;
    }
  `} 
  
  ${media.md`

    .name{
        font-size: 24px;
    }
    
    .day {
      line-height: 20px;
      font-size: 18px;
    }
  
    .time {
      line-height: 20px;
      font-size: 18px;
    }
    `} 
    
    ${media.sm`

    .name{
        font-size: 20px;
    }
    
    .day {
      font-size: 16px;
    }
  
    .time {
      font-size: 16px;
    }
  `} 

`
