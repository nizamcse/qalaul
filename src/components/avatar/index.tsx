import React from "react"
import classes from "./avatar.module.scss"
type Props = {
  letter?: string
  image?: string
}

const letterAvatar = (text?: string) => {
  return text ? text.charAt(0) : "N"
}

const ImageAvatar = ({ image }: { image: string }) => {
  return (
    <img
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        borderRadius: "100%",
      }}
      src={image}
      alt="A"
    />
  )
}

const Avatar = ({ letter, image }: Props) => {
  return (
    <div className={classes.avatar}>
      {image ? <ImageAvatar image={image} /> : letterAvatar(letter)}
    </div>
  )
}

export default Avatar
