import React, { ReactNode } from "react"
import classes from "./index.module.scss"

type Props = {
  icon: ReactNode
}

const IconButton = ({ icon }: Props) => {
  return (
    <button type="button" className={classes.iconButton}>
      {icon}
    </button>
  )
}

export default IconButton
