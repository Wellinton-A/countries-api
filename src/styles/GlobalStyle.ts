import { createGlobalStyle } from 'styled-components'

type Props = {
  font: string
  darkmode: string
}

export const darkBlue = '#2B3844' // - Dark Blue (Dark Mode Elements)
export const veryDarkBlue = '#202C36' // - Very Dark Blue (Dark Mode Background)
export const black = '#111517' // - Very Dark Blue (Light Mode Text)
export const lightGrey = '#848484' // - Dark Gray (Light Mode Input)
export const veryLightGrey = '#FAFAFA' // - Very Light Gray (Light Mode Background)
export const white = '#FFFFFF' // - White (Dark Mode Text & Light Mode Elements)

const GlobalStyle = createGlobalStyle<Props>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.font};
    background-color: ${(props) =>
      props.darkmode === 'true' ? veryDarkBlue : veryLightGrey};
    color: ${(props) => (props.darkmode === 'true' ? white : black)};
    text-decoration: none;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
`

export default GlobalStyle
