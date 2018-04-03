import * as React from 'react'

import { Colors } from '../constants'

import { CardTextList } from './CardTextList'

interface CardTextProps {
  content: string | string[]
  color?: string
}
export const CardText = (props: CardTextProps): JSX.Element => {
  // const content = 
  return (
    <div 
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        color: props.color || Colors.DarkGrey
      }}
    >
      {props.content instanceof Array
        ? <CardTextList items={props.content}/>
        : props.content
      }
    </div>
  )
}