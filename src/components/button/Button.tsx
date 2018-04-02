import * as React from 'react'

import { makeStyles } from './make-styles'

export interface ButtonProps {
  text: string
  color?: string
}
export const Button = (props: ButtonProps): JSX.Element => {
  const styles = makeStyles({color: props.color})
  const { text } = props
  return (
    <button style={styles}>{text}</button>
  )
}