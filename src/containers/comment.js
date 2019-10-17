import React from 'react'

import {seedComments} from "../data/seed"


export default function Comment(props){

  function handleClick (){
    return false
  }

  let commentObjs = seedComments.filter(com => com.commented_on === props.id)
  let comments = commentObjs.map(com =>
    <div className="comment-container">
      <div className="comment-show-bar" onClick={handleClick}></div>
      <Comment {...com} />
    </div>)
  return(
    <div className="post">
      <p>id: {props.id}</p>
      <p>user: {props.user}</p>
      <p>{props.content}</p>
      {comments}
    </div>
  )
}
