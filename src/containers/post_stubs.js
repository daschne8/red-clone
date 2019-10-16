import React from 'react'
import ReactDom from 'react-dom'

import {seed_posts} from "../data/seed"

import PostStub from "../components/post_stub"

export default function PostStubs(){
  let postsList = seed_posts.map((post, idx) => (
    <PostStub {...post} />
  ))
  return(
    <div>
      {postsList}
    </div>
  )
}
