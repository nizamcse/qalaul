import React from "react"
import Avatar from "../avatar"
import Typohraphy from "../typography"
import classes from "./index.module.scss"
type Props = {
  title: string
  publishDate: string
  image: string
}
const PostHeader = ({ title, publishDate, image }: Props) => {
  return (
    <div className={classes.header}>
      <Avatar image={image} />
      <div>
        <Typohraphy text={title} varient="title" />
        <Typohraphy
          text={new Date(publishDate).toLocaleString()}
          varient="subtitle"
        />
      </div>
    </div>
  )
}

export default PostHeader
