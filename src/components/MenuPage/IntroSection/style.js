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
    padding: 0 0 0 10%;
  `}
  
  ${media.xl`
    grid-template-rows: repeat(5, auto);
    grid-row-gap: 2rem;
    padding: 0 0 0 15%;
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
    grid-row: 1 / 4;
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
  margin-top: 1.5rem;
  line-height: 1.8em;
  color: ${colors.gray500};
  
  ${media.xxl`
    padding-top: 25px;
    font-size: 22px;
  `}
  
  ${media.xl`
    padding-top: 25px;
    font-size: 22px;
  `}

  ${media.lg`
    font-size: 18px;
  `}
  
  ${media.md`
    font-size: 18px;
  `}
  
  ${media.sm`
    font-size: 12px;
  `}
  
  ${media.xs`
    font-size: 12px;
  `}

`
