import styled from 'styled-components'
import {colors, media} from '../../../style/constants'

export const MenuSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
  padding: 2rem 5% 0 8rem;
  
  ${media.xl`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0;
    padding: 0 0 0 5%;
  `}
  
  ${media.lg`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0;
    padding: 0 0 0 5%;
  `}
  
  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 0 0 0 5%;
  `}
  
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 0 0 0 5%;
  `}
`
export const Title = styled.h1`
  margin-bottom: 5px;
  
  .name {
    color: ${colors.neon500};
    font-weight: 700;
    font-size: 24px;
  }
  
  ${media.lg`
    margin-bottom: 5px; 
  `}
  
  ${media.md`
    margin-bottom: 0; 
  `}
  
   ${media.sm`
    padding-bottom: -5%; 
  `}
`

