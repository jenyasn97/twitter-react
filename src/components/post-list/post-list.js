import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

import './post-list.css'

function PostList({ posts, onDelete }) {
  const elements = posts.map((item) => {
    return (
      <li className="list-group-item" key={item.id}>
        <PostListItem label={item.label} important={item.important} onDelete={() => {
          onDelete(item.id)
        }} />
      </li>
    )
  })
  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;