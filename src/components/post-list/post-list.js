import React from "react";
import PostListItem from "../post-list-item";

import './post-list.css'

function PostList({ posts }) {
  const elements = posts.map((item) => {
    return (
      <li className="list-group-item" key={item.id}>
        <PostListItem label={item.label} important={item.important} />
      </li>
    )
  })
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;