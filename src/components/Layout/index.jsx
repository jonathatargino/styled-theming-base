import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header'
import { Nav } from './styles'
import Footer from '../Footer'
import Routes from '../../Routes'

function Layout() {
  return (
    <>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/12786923">Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </>
  )
}

export default Layout