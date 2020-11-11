import styled from 'styled-components'
import { colors } from '../../../style/constants'

export const Name = styled.span`
  border-bottom: 1px dotted ${colors.gray700};
`

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  div {
    transition: transform .3s cubic-bezier(.45, 0, .1, 1);
    will-change: transform;
  }

  .name {
    transform: translateY(0);
  }

  .description {
    position: relative;
    overflow: visible;
    width:90%;
    top: -5px;
    transform: translateY(100%);
    color: #fff;
  }

  &:hover {
    .name {
      transform: translateY(-100%);
    }

    .description {
      transform: translateY(0);
      top: -15px;
    }
  }
`
