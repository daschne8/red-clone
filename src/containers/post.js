import React from 'react'

import {useParams,useRouteMatch} from 'react-router-dom'
import {seedPosts, seedComments} from "../data/seed"
import Comment from "./comment"


export default function Post(){

  function handleClick (){
    return false
  }
  
  let {postId} = useParams();
  let id = "post-" + postId;
  let postInfo = seedPosts.find( obj => obj.id === id)
  let postComments = seedComments.filter(obj => obj.commented_on === id)
  console.log(postComments);
  let comments = postComments.map(com =>
    <div className="comment-container">
      <div className="comment-show-bar" onClick={handleClick}></div>
      <Comment {...com} />
    </div>)
  return(
    <div className="post">
      <p>id: {id}</p>
      <p>user: {postInfo.user}</p>
      <p>{postInfo.title}</p>
      <p>{postInfo.content}</p>
      {comments}
    </div>
  )
}
