import * as React from 'react'

import { SocialIcons } from '../icon/SocialIcon'

import { Colors } from '../constants'

export const HeadshotOverlay = (props: { isVisible: boolean }): JSX.Element => {
  return (
    <div
      style={{
        background: 'white',
        opacity: props.isVisible ? 0.8 : 0,
        position: 'absolute',
        top: '2rem', left: '2rem',
        width: 'calc(100% - 4rem)',
        height: 'calc(100% - 4rem)',
        color: Colors.DarkGrey,
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          textAlign: 'center',
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
          <h3>Lindell Carter</h3>
          <p>designer</p>
          <SocialIcons hoverColor={Colors.Blue}/>
      </div>
    </div>
  )
}