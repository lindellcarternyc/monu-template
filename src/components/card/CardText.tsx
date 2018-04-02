import * as React from 'react'

import { Colors } from '../constants'

interface CardTextProps {
  content: string
  color?: string
}
export const CardText = (props: CardTextProps): JSX.Element => {
  return (
    <div 
      style={{
        marginBottom: '1rem', 
        color: props.color || Colors.DarkGrey
      }}
    >
      {props.content}
    </div>
  )
}