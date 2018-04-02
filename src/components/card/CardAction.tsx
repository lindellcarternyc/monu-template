import * as React from 'react'

import { ActionButton } from '../button/ActionButton'

export interface CardActionProps {
  text: string
  isHovered?: boolean
}
export const CardAction = (props: CardActionProps) => {
  return (
    <div>
      <ActionButton text={props.text} isHovered={props.isHovered}/>
    </div>
  )
}