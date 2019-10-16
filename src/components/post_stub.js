import React from 'react'
import {BrowserRouter as Router, NavLink, Link} from 'react-router-dom'

export default function PostStub(props){
  return(
    <NavLink to={`/${props.id}`}>
      <div className="post-stub">
        <h6 className="post-stub-name">{props.user}</h6>
        <p className="post-stub-title">{props.title}</p>
      </div>
    </NavLink>
  )
}
