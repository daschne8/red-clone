import React from 'react'

import {useParams} from 'react-router-dom'
import {seed_posts} from "../data/seed"


export default function Post(){
  let {id} = useParams();
  let postInfo = seed_posts.find( obj => obj.id === id)
  return(
    <div className="post">
      <p>id: {id}</p>
      <p>user: {postInfo.user}</p>
      <p>{postInfo.title}</p>
      <p>{postInfo.content}</p>

    </div>
  )
}
