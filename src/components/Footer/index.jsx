import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Container } from './styles'

function Footer() {
  const { handleToggleTheme, theme } = useContext(ThemeContext)
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌛'}
      </button>
    </Container>
  )
}

export default Footer