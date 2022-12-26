import React from "react"
import { IComment } from "../../services/posts"
import Avatar from "../avatar"
import Typohraphy from "../typography"
import classes from "./comment.module.scss"

type Props = {
  comment: IComment
}

const Comment = ({ comment }: Props) => {
  return (
    <div className={classes.container}>
      <Avatar image={comment.owner.picture} />
      <div>
        <Typohraphy text={comment.owner.firstName} varient="title" />
        <Typohraphy text={comment.message} varient="subtitle" />
      </div>
    </div>
  )
}

export default Comment
