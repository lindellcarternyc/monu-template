import * as React from 'react'

import { ActionButton } from '../button/ActionButton'

export interface CardActionProps {
  text: string
  isHovered?: boolean
}
export const CardAction = (props: CardActionProps) => {
  return (
    <div style={{marginBottom: '2rem'}}>
      <ActionButton text={props.text} isHovered={props.isHovered}/>
    </div>
  )
}