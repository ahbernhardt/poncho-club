import styled from 'styled-components'
import { colors,media, getOuterSpace } from '../../../style/constants'

export const Wrapper = styled.div`
   position: relative;
   // top: 20%;
   z-index:0;
   cursor:none;
   ${getOuterSpace('padding')}
  
  ${media.xxl`
    position: static;
    padding: 15% 0 0 20%;
  `}
  
  ${media.xl`
    position: static;
    padding: 10% 0 0 20%;
  `}
  
  ${media.lg`
    position: static;
    padding: 10% 0 0 20%;
  `}
  
  ${media.md`
    position: static;
    padding: 25% 0 0 5%;
  `}
  
  ${media.sm`
    position: static;
    padding: 15% 0 0 5%;
  `}
  ${media.xs`
    position: static;
    padding: 15% 0 0 5%;
  `}
\`

  .padding{
    height: 100vh;
    -webkit-transform: translateX(50%);
    -moz-transform: translateX(50%);
    -ms-transform: translateX(50%);
    -o-transform: translateX(50%);
  }
  svg {
    width: 100%;
    height: 100%;
  } 
  
  h1 {
    position: absolute;
    transform: translate(37%, 35%);
    margin-bottom: 0px !important;
    
    ${media.xxl`
      width: 800px;
      height: 800px;
      transform: translate(0%, 0%);
    `}
  
    ${media.xl`
      width: 500px;
      height: 500px;
     transform: translate(0%, 0%);
    `}
  
    ${media.lg`
      width: 500px;
      height: 500px;
     transform: translate(0%, 0%);
    `}
  
    ${media.md`
      width: 400px;
      height: 400px;
      transform: translate(0%, 0%);
    `}
  
    ${media.sm`
      width: 200px;
      height: 200px;
      transform: translate(0%, 0%);
    `}
  
    ${media.xs`
      width: 200px;
      height: 200px;
      transform: translate(0%, 0%);
    `}
  }
  
  .path {
    fill: ${colors.gray700};
  }
      
  .dot {
    opacity: 75%;
    fill:${colors.gray500};
  }
`

