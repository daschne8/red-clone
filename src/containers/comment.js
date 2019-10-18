import React, {useState} from 'react'

import {seedComments} from "../data/seed"


export default function Comment(props){

  const [show, setShow] = useState(true);

  function handleClick (){
    if (show === true) {
      setShow(false)
    }else {
      setShow(true)
    }
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
      {show ? comments : <div className="closed-comment" onClick={handleClick}> . . . </div>}
    </div>
  )
}
