import React, { useContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GlobalStyle from './styles/GlobalStyle'

import Footer from './components/Footer'
import Header from './components/Header'
import PostList from './components/PostList'
import { ThemeContext } from './contexts/ThemeContext'


function App() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header/>
      <PostList />
      <Footer/>
    </StyledThemeProvider>
  )
}

export default App