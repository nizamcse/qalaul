import React, { useEffect, useState } from "react"
import { IComment, usePostDetailsQuery } from "../../services/posts"
import Comments from "../comment"

type Props = {
  likes: number
  id: string
}

const PostFooter = ({ likes, id }: Props) => {
  const [comments, setComments] = useState<IComment[]>([])
  const [postId, setPostId] = useState<string | null>(null)
  const { data, error } = usePostDetailsQuery(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    { id: postId! },
    { skip: !postId }
  )

  useEffect(() => {
    setPostId(id || null)
  }, [id])

  useEffect(() => {
    if (data) {
      console.log(data)
      setComments(data.data)
    }
    if (error) {
      if ("status" in error) {
        // you can access all properties of `FetchBaseQueryError` here
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error.data)
        console.log(errMsg)
      } else {
        console.log(error.message || null)
      }
    }
  }, [data, error])
  return (
    <div>
      <div className="post-footer">
        <div className="counter">
          <div className="count-block">
            <div className="like-icon"></div>
            <p>{likes}</p>
          </div>
          <div className="count-block">
            <p>{comments.length} comments</p>
          </div>
        </div>
        <div className="divider" />
        <div className="action-buttons">
          <div className="action-button">
            <div className="action-like-icon"></div>
            <p>Like</p>
          </div>
          <div className="action-button">
            <div className="action-comment-icon"></div>
            <p>Comment</p>
          </div>
        </div>
        <hr />
        <Comments postId={id} comments={comments} />
      </div>
    </div>
  )
}

export default PostFooter
