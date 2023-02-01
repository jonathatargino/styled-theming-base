import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Container } from './styles'

function Header() {
  const { handleToggleTheme, theme } = useContext(ThemeContext)
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌛'}
      </button>
    </Container>
  )
}

export default Header