import React from 'react'
import { ThemeProvider } from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import PostList from './components/PostList'
import GlobalStyle from './styles/GlobalStyle'

import themes from "./styles/themes"

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Header />
      <PostList />
      <Footer />
    </ThemeProvider>
  )
}

export default App