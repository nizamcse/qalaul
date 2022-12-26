import React from "react"
import classes from "./index.module.scss"
type Props = {
  text: string
}

const DesriptionContent = ({ text }: Props) => {
  return <div className={classes.description}>{text}</div>
}

export default DesriptionContent
