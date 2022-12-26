import React from "react"
import cn from "classnames"
import styles from "./index.module.scss"

type TVarient = "title" | "subtitle"
type Props = {
  text: string
  varient: TVarient
}

const Typohraphy = ({ text, varient }: Props) => {
  const classNames = cn({
    [styles[`typography__${varient}`]]: varient,
  })
  return <p className={classNames}>{text}</p>
}

export default Typohraphy
