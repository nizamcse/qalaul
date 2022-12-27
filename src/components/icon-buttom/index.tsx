import React, { ReactNode } from "react"
import classes from "./index.module.scss"

type Props = {
  icon: ReactNode
  value?: number
}

const IconButton = ({ icon, value }: Props) => {
  return (
    <button type="button" className={classes.iconButton}>
      {icon}
      <span className={classes.iconButtonBadge}>{value}</span>
    </button>
  )
}

export default IconButton
