import * as React from 'react'

import { Icon } from './Icon'
import { HoverIcon } from './HoverIcon'

interface SocialIconProps {
  name: string
  color?: string
  fontSize?: string
  hoverColor?: string
}
export const SocialIcon = (props: SocialIconProps): JSX.Element => {
  const { hoverColor, ...rest } = props
  if ( hoverColor !== undefined ) {
    return <HoverIcon brand hoverColor={hoverColor} {...rest} />
  }
  return <Icon brand {...rest} />
}

interface SocialIconListProps {
  maxWidth?: number
  color?: string
  hoverColor?: string
}
export const SocialIcons = (props: SocialIconListProps): JSX.Element => {
  const { maxWidth, color, hoverColor } = props
  return (
    <div
      style={{
        maxWidth,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <SocialIcon name="facebook-f" color={color} hoverColor={hoverColor}/>
      <SocialIcon name="twitter" color={color} hoverColor={hoverColor}/>
      <SocialIcon name="google-plus-g" color={color} hoverColor={hoverColor}/>
      <SocialIcon name="instagram" color={color} hoverColor={hoverColor}/>
    </div>
  )
}