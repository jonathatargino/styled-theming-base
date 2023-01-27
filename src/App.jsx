import React from 'react'
import Header from './components/Header'
import PostList from './components/PostList'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PostList />
    </>
  )
}

export default App