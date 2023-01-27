import React from 'react'
import { Container } from './styles'

function Header({onToggleTheme, selectedTheme}) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {selectedTheme === 'dark' ? '🌞' : '🌛'}
      </button>
    </Container>
  )
}

export default Header