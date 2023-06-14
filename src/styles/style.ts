import styled from 'styled-components'
import { darkBlue, lightGrey, white } from './GlobalStyle'
import Link from 'next/link'

type Props = {
  darkmode: string
  selecttoggle?: string
}

export const FiltersContainerPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
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

  @media (max-width: 767px) {
    margin-top: 24px;
    width: 343px;
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

  @media (max-width: 767px) {
    margin-top: 40px;
  }
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

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const BackContainer = styled(Link)<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 136px;
  height: 40px;
  padding: 10px 40px 10px 32px;
  margin-top: 80px;
  background-color: ${(props) =>
    props.darkmode === 'true' ? darkBlue : white};
  border-radius: 6px;
  filter: drop-shadow(0 0px 7px rgba(0, 0, 0, 0.2931));

  img {
    width: 14px;
    height: 14px;
    background-color: transparent;
  }

  span {
    background-color: transparent;
    font-size: 16px;
    font-weight: 200;
  }

  @media (max-width: 767px) {
    width: 104px;
    height: 32px;
    padding: 7px 24px;

    span {
      font-size: 14px;
    }
  }
`

export const DetailsCountryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;

  h3 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 24px;
  }

  @media (max-width: 1280px) {
    flex-direction: column;

    h3 {
      margin-top: 44px;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    h3 {
      margin-top: 44px;
      font-size: 22px;
    }
  }
`

export const ImageContainerDetails = styled.div`
  width: 560px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;

  @media (max-width: 767px) {
    width: 320px;
    height: 229px;
  }
`

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 574px;

  @media (max-width: 767px) {
    width: 320px;
  }
`

export const MinDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;

  @media (max-width: 767px) {
    gap: 32px;
    flex-direction: column;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-size: 16px;
    font-weight: 300;

    span {
      font-weight: 200;
      margin-right: 8px;
    }
  }

  @media (max-width: 767px) {
    span {
      font-size: 14px;
    }
  }
`

export const BorderCountriesContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 8px;

  h4 {
    font-size: 16px;
    font-weight: 300;
    margin-right: 42px;
  }

  span {
    font-size: 14px;
    font-weight: 200;
    padding: 6px 28px;
    margin-right: 10px;
    background-color: ${(props) =>
      props.darkmode === 'true' ? darkBlue : white};
    filter: drop-shadow(0 0px 7px rgba(0, 0, 0, 0.2931));
  }

  @media (max-width: 767px) {
    span {
      font-size: 12px;
    }
  }
`
