import * as React from 'react'

interface IconProps {
  name: string
  brand?: boolean
  color?: string
  fontSize?: string
}
export const Icon = (props: IconProps): JSX.Element => {
  const prefix = props.brand === true
    ? 'fab fa-'
    : 'fas fa-'
  const className = prefix + props.name
  return (
    <i 
      className={className}
      style={{
        color: props.color,
        fontSize: props.fontSize
      }}
    />
  )
}