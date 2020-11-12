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
    padding: 14% 0 0 23%;
    
    iframe{
      width: 1480px;
      height: 860px;
    }
  `}
  
  ${media.xl`
    grid-template-columns: repeat(1, 1fr);
    padding: 8% 0 0 21%;
    
    iframe{
      width: 820px;
      height: 480px;
    }
  `}
  
  ${media.lg`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    padding: 15% 0 0 12%;
    
    iframe{
      width: 750px;
      height: 420px;
    }
  `}
  
  ${media.md`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
    padding: 20% 0 0 6%;
    
    iframe{
      width: 660px;
      height: 380px;
    }
  `}
  
  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 3rem;
    padding: 28% 0 0 8%;
    
    iframe{
      width: 340px;
      height: 230px;
    }
  `}
  
  ${media.xs`
    grid-template-columns: repeat(1, 1fr);
    padding: 35% 0 0 8%;
    
    iframe{
      width: 320px;
      height: 220px;
    }
  `}
`


