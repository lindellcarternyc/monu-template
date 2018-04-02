import * as React from 'react'

import { Colors } from '../constants'

interface CardTitleProps {
  text: string
  color?: string
}
export const CardTitle = (props: CardTitleProps): JSX.Element => {
  return (
    <h2 
      style={{
        color: props.color || Colors.DarkGrey
      }}
    >{props.text}
    </h2>
  )
}