import * as React from "react"
import cx from "classnames"

import styles from "./Text.module.scss"
import { Props } from "./Text.types"

export const Text = ({ tag = "p", size = "md", children, align = "inherit", className }: Props) => {
  const Tag = tag

  return <Tag className={cx(styles.text, styles[size], styles[align], className)}>{children}</Tag>
}
