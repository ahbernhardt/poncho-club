import styled from "styled-components";
import {colors, media} from "../../style/constants";

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
    margin-top: 0px;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 2% 0 0 0;
    
    a{
      margin-top: -10px;
    }
  `}
  
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 2% 0 0 5%;
    
     a{
      margin-top: -12px;
    }
  `}
  
  a {
    font-size: 12px;
  }
  
  i{
    font-size: 20px;
    padding-right: 16px;
  }
`
export const Title = styled.h1`
  margin-bottom: 5px;
  
  .name {
    color: ${colors.neon500};
    font-weight: 700;
    font-size: 18px;
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
