import styled from 'styled-components'
import { media, colors } from '../../../style/constants'

export const ListTitle = styled.h2`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
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
 ${media.xxl`
       font-size: 1.8rem;
  `} 
  
  ${media.xl`
      font-size: 1.6rem;
  `} 
  
  ${media.lg`
      font-size: 1.4rem;
  `} 
  
  ${media.md`
      font-size: 1.2rem;
  `} 

  ${media.sm`
      font-size: 1.2rem;
  `} 
  
  ${media.xs`
      font-size: .9rem;
  `} 
  
`
