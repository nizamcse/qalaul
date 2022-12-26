import React from "react"
import { IComment } from "../../services/posts"
import Comment from "./comment"

type Props = {
  comments: IComment[]
  postId: string
}

const Comments = ({ comments, postId }: Props) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={`post-id-${postId}-comment-id-${comment.id}`}
          comment={comment}
        />
      ))}
    </div>
  )
}

export default Comments
