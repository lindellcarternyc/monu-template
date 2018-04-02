import * as React from 'react'

import { Colors } from '../constants'

const HeroIcon = (props: { name: string }): JSX.Element => {
  const className = `fab fa-${props.name}`
  return (
    <li 
      style={{
        listStyleType: 'none',
        display: 'inline-block',
        marginLeft: '0.25rem', marginRight: '0.25rem',
        color: Colors.Blue
      }}
    ><i className={className}/>
    </li>
  )
}

export const HeroIcons = (): JSX.Element => {
  return (
    <ul
      style={{
        border: '1px solid red',
        margin: '0', padding: '0'
      }}
    >
      <HeroIcon name="facebook-f"/>
      <HeroIcon name="twitter" />
      <HeroIcon name="google-plus-g" />
      <HeroIcon name="instagram" />
    </ul>
  )
}