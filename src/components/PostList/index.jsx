import React from 'react'

import Post from '../Post'

import posts from './posts'
import { Container } from './styles'

function PostList() {
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

export default PostList