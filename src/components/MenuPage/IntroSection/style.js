import styled from 'styled-components'
import { colors, media } from '../../../style/constants'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  position: relative;
  
  ${media.xxl`
    grid-template-rows: repeat(5, auto);
    grid-row-gap: 1rem;
    padding: 0 0 0 5%;
  `}
  
  ${media.xl`
    grid-template-rows: repeat(5, auto);
    grid-row-gap: 1rem;
    padding: 0 0 0 5%;
  `}
  
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
  
  ${media.xxl`
    grid-column: 1 / 8;
    grid-row: 1 / 4;
  `}
  
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

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${colors.gray500};
  ${media.sm`
    margin-top: 1rem;
  `}

`
