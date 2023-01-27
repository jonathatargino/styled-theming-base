import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import PostList from './components/PostList'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PostList />
      <Footer />
    </>
  )
}

export default App