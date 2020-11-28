import styled from 'styled-components'
import { media, colors } from '../../../style/constants'

export const Name = styled.span`
  border-bottom: 1px dotted ${colors.gray700};
`

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  div {
    transition: transform .3s cubic-bezier(.45, 0, .1, 1);
    will-change: transform;
  }

  .name {
    transform: translateY(0);
  }

  .description {
    position: relative;
    overflow: visible;
    width:90%;
    top: -2px;
    transform: translateY(100%);
    color: #fff;
  }

  &:hover {
    .name {
      transform: translateY(-100%);
    }

    .description {
      transform: translateY(0);
      top: -15px;
    }
  }
  
  ${media.xxl`
    .name{
        font-size: 20px;
    }
    
    .description {
      line-height: 28px;
      font-size: 20px;
    }
  `} 
  
  ${media.xl`
    .name{
        font-size: 20px;
    }
    
    .description {
      line-height: 26px;
      font-size: 20px;
    }
  `} 
  
  ${media.lg`
    .name{
        font-size: 20px;
    }
    
    .description {
      line-height: 26px;
      font-size: 20px;
    }
  `} 

`
