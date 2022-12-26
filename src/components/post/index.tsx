import React from "react"
import { IPost } from "../../services/posts"
import DesriptionContent from "../description"
import PostFooter from "../post-footer"
import PostHeader from "../post-header"
import "./index.module.scss"
type Props = {
  post: IPost
}

const Post = ({ post }: Props) => {
  return (
    <div className="card my-16 post-card">
      <PostHeader
        image={post.owner.picture}
        title={post.owner.firstName}
        publishDate={post.publishDate}
      />
      <DesriptionContent text={post.text} />
      <PostFooter id={post.id} likes={post.likes} />
    </div>
  )
}

export default Post
