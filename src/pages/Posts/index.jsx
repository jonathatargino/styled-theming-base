import React from 'react'

import Post from '../../components/Post'

import posts from './posts'
import { Container } from './styles'

function Posts() {
  return (
    <Container>
      {posts.map((post)=> (
        <Post
          title={post.title}
          subtitle={post.description}
          key={post.id}
        />
      ))}
    </Container>
  )
}

export default Posts