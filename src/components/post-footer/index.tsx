import React, { useEffect, useState } from "react"
import { MdThumbUp, MdModeComment, MdShare, MdMoreHoriz } from "react-icons/md"
import { IComment, usePostDetailsQuery } from "../../services/posts"
import Comments from "../comment"
import IconButton from "../icon-buttom"
import classes from "./index.module.scss"

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
      <div className={classes.container}>
        <IconButton icon={<MdThumbUp />} />
        <IconButton icon={<MdModeComment />} />
        <IconButton icon={<MdShare />} />
        <IconButton icon={<MdMoreHoriz />} />
      </div>
      <div>
        <Comments postId={id} comments={comments} />
      </div>
    </div>
  )
}

export default PostFooter
