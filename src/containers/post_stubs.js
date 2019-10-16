import React from 'react'
import ReactDom from 'react-dom'

import {seedPosts} from "../data/seed"
import {BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom'

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
