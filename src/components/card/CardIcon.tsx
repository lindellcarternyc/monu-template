import * as React from 'react'

import { Colors } from '../constants'

interface CardIconProps { 
  name: string
}
export const CardIcon = (props: CardIconProps): JSX.Element => {
  const className = `fas fa-${props.name}`
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '3rem'
      }}
    >
      <i 
        className={className}
        style={{
          color: Colors.Blue,
          fontSize: '2.5rem'
        }}
      />
    </div>
  )
}