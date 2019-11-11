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
      <Comment {...com} />
    )
  let comment = ""

    if (show) {
      return(
        <div className="comment-container">
          <div className="comment-show-bar" onClick={handleClick}></div>
          <div classname="comment-info">
            <p>id: {props.id}</p>
            <p>user: {props.user}</p>
            <p>{props.content}</p>
            {comments}
          </div>
        </div>
        )
    } else {
      return(
        <div className="closed-comment" onClick={handleClick}> . . . </div>)
    }
}
