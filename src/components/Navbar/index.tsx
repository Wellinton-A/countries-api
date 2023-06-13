import { useContext } from 'react'

import { DarkModeContext } from '@/context/darkMode.context'

import lightMode from '../../assets/moon-outline.svg'
import darkModeIm from '../../assets/icons8-moon-30.png'
import Image from 'next/image'

import * as S from './style'

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  const handleToggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <S.HeaderStyled darkmode={darkMode.toString()}>
      <S.NavbarStyled
        className="container"
        onClick={handleToggleTheme}
        darkmode={darkMode.toString()}
      >
        <h1>Where in the world?</h1>
        <S.ThemeToggleContainer>
          {darkMode ? (
            <Image src={darkModeIm} alt="moon icon" width={15} height={13.75} />
          ) : (
            <Image src={lightMode} alt="moon icon" width={15} height={13.75} />
          )}
          <span>Dark Mode</span>
        </S.ThemeToggleContainer>
      </S.NavbarStyled>
    </S.HeaderStyled>
  )
}

export default Navbar
