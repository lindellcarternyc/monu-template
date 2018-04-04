import * as React from 'react'

import { Colors } from '../constants'
import { SocialIcon } from '../icon/SocialIcon'

const HeroIcon = (props: { name: string }): JSX.Element => {
  return (
    <li 
      style={{
        listStyleType: 'none',
        display: 'inline-block',
        marginLeft: '0.25rem', marginRight: '0.25rem',
        color: Colors.Blue
      }}
    ><SocialIcon name={props.name} />
    </li>
  )
}

export const HeroIcons = (): JSX.Element => {
  return (
    <ul
      style={{
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