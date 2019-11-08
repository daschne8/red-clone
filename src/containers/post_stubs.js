import React from 'react'

import {seedPosts} from "../data/seed"

import PostStub from "../components/post_stub"

export default function PostStubs(){
  let postsList = seedPosts.map((post, idx) => (
    <PostStub {...post} />
  ))
  return(
    <div>
      {postsList}
    </div>
  )
}
