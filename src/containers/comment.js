import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

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
            <div className="comment-info-top">
              <NavLink to={`/user/${props.user}`} className="comment-user">{props.user}</NavLink>
              <p className="comment-points"> points</p>
               •
              <p classname="comment-time-since">hours ago</p>
               • 
              <p className="comment-id">id: {props.id}</p>
            </div>
            <p className="comment-content">{props.content}</p>
            {comments}
          </div>
        </div>
        )
    } else {
      return(
        <div className="closed-comment" onClick={handleClick}> . . . </div>)
    }
}
