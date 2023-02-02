import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Header from '../Header'
import { Nav } from './styles'
import Footer from '../Footer'
import Routes from '../../Routes'

function Layout() {
  return (
    <Router>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </Nav>
      <Routes />
      <Footer />
    </Router>
  )
}

export default Layout