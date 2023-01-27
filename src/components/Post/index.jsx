import React from 'react'
import { Container } from './styles'

function Post({title, subtitle}) {
  return (
    <Container>
      <h2>{title}</h2>
      <small>{subtitle}</small>
    </Container>
  )
}

export default Post