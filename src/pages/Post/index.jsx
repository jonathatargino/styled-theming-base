import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

function Post() {
  console.log(useHistory())
  const { id } = useParams()

  return (
    <h1>Post {id}</h1>
  )
}

export default Post