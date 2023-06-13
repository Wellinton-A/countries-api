import { darkBlue, white } from '@/styles/GlobalStyle'
import styled from 'styled-components'

type Props = {
  darkmode: string
}

export const CardContainer = styled.div<Props>`
  width: 264px;
  height: 336px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.darkmode === 'true' ? darkBlue : white};
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.0562));
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px 5px 0 0;
`

export const InfoContainer = styled.div`
  padding: 24px 24px 46px 24px;
  background-color: transparent;

  div {
    display: flex;
    flex-direction: column;
    background-color: transparent;

    h3 {
      background-color: transparent;
      font-size: 18px;
      line-height: 26px;
      font-weight: 800;
      margin-bottom: 16px;
    }

    span {
      background-color: transparent;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;

      span {
        background-color: transparent;
        font-weight: 200;
      }
    }
  }
`
