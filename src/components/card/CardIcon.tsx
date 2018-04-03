import * as React from 'react'

import { Colors } from '../constants'

import { Icon } from '../Icon'

interface CardIconProps { 
  name: string
}
export const CardIcon = (props: CardIconProps): JSX.Element => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '3rem'
      }}
    >
      <Icon 
        name={props.name}
        color={Colors.Blue}
        fontSize="2.5rem"
      />
    </div>
  )
}