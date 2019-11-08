import React, {useState} from 'react'

import {useParams} from 'react-router-dom'
import {seedPosts, seedComments} from "../data/seed"
import Comment from "./comment"


export default function Post(){

  const [show, setShow] = useState(true);

  function handleClick (){
    if (show === true) {
      setShow(false)
    }else {
      setShow(true)
    }
  }

  let {postId} = useParams();
  let id = "post-" + postId;
  let postInfo = seedPosts.find( obj => obj.id === id)
  let postComments = seedComments.filter(obj => obj.commented_on === id)
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
      {show ? comments : <div className="closed-comment" onClick={handleClick}> . . . </div>}
    </div>
  )
}
