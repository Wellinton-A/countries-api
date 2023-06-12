import { Dispatch, SetStateAction, createContext, useState } from 'react'

type DarkMode = {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

type Props = {
  children: JSX.Element
}

export const DarkModeContext = createContext<DarkMode>({
  darkMode: false,
  setDarkMode: () => null
})

const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const values: DarkMode = {
    darkMode,
    setDarkMode
  }

  return (
    <DarkModeContext.Provider value={values}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
