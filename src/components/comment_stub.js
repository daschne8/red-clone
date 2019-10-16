import React from 'react'

export default function CommentStub(props){
  const comments = props.comments.map((comment, idx) => return <CommentStub {...comment} />)
  return(
    <div className="comment-stub">
      <h6 className="comment-stub-name">{props.user}</h6>
      <p className="comment-stub-title">{props.title}</p>
    </div>
  )
