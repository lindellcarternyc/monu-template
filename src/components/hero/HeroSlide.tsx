import * as React from 'react'

import { Colors } from '../constants'
import { HeroIcons } from './HeroIcons'
import { ActionButton } from '../button/ActionButton'

export const HeroSlide = (): JSX.Element => {
  return (
    <div
      style={{
        border: '1px solid purple',
        height: '100%',
        paddingTop: '10rem',
        textAlign: 'center'
      }}
    >
      <HeroIcons />
      <h1
        style={{
          fontSize: '3.5rem',
          color: Colors.DarkGrey
        }}
      >
      We Are Lindell.io
      </h1>
      <p
        style={{
          color: Colors.DarkGrey
        }}
      >We Create Awesome Websites for People and Businesses
      </p>
      <ActionButton text="Purchase" />
    </div>
  )
}