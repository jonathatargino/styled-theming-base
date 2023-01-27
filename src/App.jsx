import React, { useState, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'
import themes from "./styles/themes"

import Footer from './components/Footer'
import Header from './components/Header'
import PostList from './components/PostList'


function App() {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme()  {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />
      <PostList />
      <Footer
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  )
}

export default App