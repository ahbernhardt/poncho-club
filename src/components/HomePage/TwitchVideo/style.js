import styled from 'styled-components'
import { media} from '../../../style/constants'

export const TwitchSection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
  padding: 0 5% 0 8rem;
  
  ${media.xxl`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 12% 0 0 21%;
    
    iframe{
      width: 1480px;
      height: 860px;
    }
  `}
  
  ${media.xl`
    grid-template-columns: repeat(1, 1fr);
    padding: 8% 0 0 22%;
    
    iframe{
      width: 750px;
      height: 422px;
    }
  `}
  
  ${media.lg`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 15% 0 0 16%;
    
    iframe{
      width: 750px;
      height: 420px;
    }
  `}
  
  ${media.md`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 25% 0 0 6%;
    
    iframe{
      width: 575px;
      height: 320px;
    }
  `}
  
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 25% 0 0 5%;
    
    iframe{
      width: 450px;
      height: 320px;
    }
  `}
`


