import styled from 'styled-components'
import { colors, media } from '../../../style/constants'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  position: relative;
  
  ${media.lg`
    grid-template-rows: repeat(5, auto);
    grid-row-gap: 1rem;
    padding: 0 0 0 5%;
  `}
  
  ${media.md`
    grid-template-rows: repeat(6, auto);
    grid-row-gap: 1rem;
  `}
  
  ${media.sm`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: .5rem;
  `}
`

export const InfoWrapper = styled.header`
  grid-row: 1 / 4;
  grid-column: 2/ 8;
  z-index: 1;
  
  ${media.lg`
    grid-column: 1 / 8;
    grid-row: 1 / 5;
  `}
  
  ${media.md`
    grid-column: 1 / 8;
    grid-row: 1 / 4;
  `}
  ${media.sm`
    padding-top: 15px;
    padding-bottom: 25px;
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`
export const GallerySection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 1rem 5% 3rem 8rem;
  
  ${media.lg`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 5% 0 0 5%;
  `}
  
  ${media.md`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 2% 0 0 5%;
  `}
  
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 2% 0 0 5%;
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
    margin-bottom: 15px; 
  `}
  
   ${media.sm`
    padding-bottom: -5%; 
  `}
`
