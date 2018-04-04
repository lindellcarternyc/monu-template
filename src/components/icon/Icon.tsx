import * as React from 'react'

export interface IconProps {
  name: string
  brand?: boolean
  color?: string
  fontSize?: string
}

export const Icon = (props: IconProps): JSX.Element => {
  const { brand, name, color, fontSize } = props
  const prefix = brand === true ? 'fab' : 'fas'
  const className = `${prefix} fa-${name}`

  return (
    <i 
      className={className}
      style={{
        color: color,
        fontSize: fontSize,
        transition: 'color 0.3s ease'
      }}
    />
  )
}