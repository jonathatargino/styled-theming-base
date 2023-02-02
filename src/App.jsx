import React, { useContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeContext } from './contexts/ThemeContext'

import GlobalStyle from './styles/GlobalStyle'
import Layout from './components/Layout'


function App() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </StyledThemeProvider>
  )
}

export default App