import styled from "styled-components";
import {media} from "../../style/constants";

export const StreamSection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-top: -78px;
  padding: 0 5% 3rem 8rem;
  
  ${media.lg`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 5% 0 0 5%;
  `}
  
  ${media.md`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 2% 0 0 0;
  `}
  
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 2% 0 0 5%;
  `}
`
