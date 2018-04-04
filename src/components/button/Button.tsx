import * as React from 'react'

import { makeStyles } from './make-styles'

export interface ButtonProps {
  text: string
  color?: string
  fill?: boolean
}
export const Button = (props: ButtonProps): JSX.Element => {
  const styleOptions = {
    color: props.color,
    fill: props.fill
  }
  const styles = makeStyles(styleOptions)
  const { text } = props
  return (
    <button style={styles}>{text}</button>
  )
}