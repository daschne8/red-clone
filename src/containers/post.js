import React, {useState} from 'react'

import {useParams, NavLink} from 'react-router-dom'
import {seedPosts, seedComments} from "../data/seed"
import Comment from "./comment"


export default function Post(){

  const [show, setShow] = useState(true);

  let {postId} = useParams();
  let id = "post-" + postId;
  let postInfo = seedPosts.find( obj => obj.id === id)
  let postComments = seedComments.filter(obj => obj.commented_on === id)
  let comments = postComments.map(com =>
      <Comment {...com} />
    )
  return(
    <div className="post">
      <div className="post-info-top">
        <p>id: {id}</p>
        <p>posted by</p>
        <NavLink to={`/user/${postInfo.user}`} className="comment-user">{postInfo.user}</NavLink>
        <p> hours ago</p>
      </div>
      <p>{postInfo.title}</p>
      <p>{postInfo.content}</p>
      {comments}
    </div>
  )
}
