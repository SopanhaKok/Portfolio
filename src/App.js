import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'

import Home from './pages/Home'
const App = () => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Home themeToggler={themeToggler} />
    </ThemeProvider>
  )
}

export default App
