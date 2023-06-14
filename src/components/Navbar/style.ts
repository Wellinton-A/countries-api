import { black, darkBlue, white } from '@/styles/GlobalStyle'
import styled from 'styled-components'

type Props = {
  darkmode: string
}

export const HeaderStyled = styled.header<Props>`
  background-color: ${(props) =>
    props.darkmode === 'true' ? darkBlue : white};
  height: 80px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.0562));
`

export const NavbarStyled = styled.nav<Props>`
  background-color: ${(props) =>
    props.darkmode === 'true' ? darkBlue : white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: ${(props) => (props.darkmode === 'true' ? white : black)};

  h1 {
    background-color: transparent;
    font-size: 24px;
    font-weight: 800;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 14px;
    }
  }
`

export const ThemeToggleContainer = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  span {
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
  }

  img {
    background-color: transparent;
  }

  @media (max-width: 767px) {
    span {
      font-size: 12px;
    }
  }
`
