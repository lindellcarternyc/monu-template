import * as React from 'react'

import { Icon } from './Icon'

interface SocialIconProps {
  name: string
  color?: string
  fontSize?: string
}
export const SocialIcon = (props: SocialIconProps): JSX.Element => {
  return (
    <Icon brand {...props}/>
  )
}

interface SocialIconListProps {
  maxWidth?: number
  color?: string
}
export const SocialIcons = (props: SocialIconListProps): JSX.Element => {
  const { maxWidth, color } = props
  return (
    <div
      style={{
        maxWidth,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <SocialIcon name="facebook-f" color={color} />
      <SocialIcon name="twitter" color={color} />
      <SocialIcon name="google-plus-g" color={color} />
      <SocialIcon name="instagram" color={color} />
    </div>
  )
}