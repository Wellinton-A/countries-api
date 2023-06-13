import styled from 'styled-components'
import { darkBlue, lightGrey, white } from './GlobalStyle'

type Props = {
  darkmode: string
  selecttoggle?: string
}

export const FiltersContainerPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`

export const SearchContainer = styled.div<Props>`
  width: 480px;
  height: 56px;
  padding: 18px 18px;
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: ${(props) =>
    props.darkmode === 'true' ? darkBlue : white};
  border-radius: 5px;
  filter: drop-shadow(0 2px 9px rgba(0, 0, 0, 0.0532));

  img {
    background-color: transparent;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    color: ${(props) => (props.darkmode === 'true' ? white : lightGrey)};

    ::placeholder {
      color: ${(props) => (props.darkmode === 'true' ? white : lightGrey)};
    }
  }
`

export const FilterByRegionContainer = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 48px;
  font-size: 14px;
  font-weight: 400;
`

export const SelectContainer = styled.div<Props>`
  width: 100%;
  height: 56px;
  padding: 18px 18px 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: transparent;
  background-color: ${(props) =>
    props.darkmode === 'true' ? darkBlue : white};
  filter: drop-shadow(0 2px 9px rgba(0, 0, 0, 0.0532));

  span {
    background-color: transparent;
  }

  img {
    background-color: transparent;
  }
`

export const OptionsDiv = styled.div<Props>`
  position: absolute;
  top: 60px;
  width: 100%;
  height: 164px;
  padding: 16px 24px;
  display: ${(props) => (props.selecttoggle === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  gap: 9px;
  background-color: ${(props) =>
    props.darkmode === 'true' ? darkBlue : white};
  border-radius: 5px;
  filter: drop-shadow(0 2px 9px rgba(0, 0, 0, 0.0532));
  z-index: 1;

  span {
    background-color: transparent;
    cursor: pointer;
  }
`

export const ArrowDownImageContainer = styled.div`
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`

export const AllCardContainer = styled.div`
  width: 100%;
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 75px;
`
