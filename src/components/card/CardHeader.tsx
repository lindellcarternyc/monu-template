import * as React from 'react'

import { Colors } from '../constants'

interface CardHeaderProps {
  text: string
}
export const CardHeader = (props: CardHeaderProps): JSX.Element => {
  return (
    <div
      style={{
        borderBottom: `1px solid ${Colors.DarkGrey}`
      }}
    >
      <h2 style={{color: Colors.DarkGrey}}>{props.text}</h2>
    </div>
  )
}