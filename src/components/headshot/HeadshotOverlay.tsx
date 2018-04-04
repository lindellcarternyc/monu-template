import * as React from 'react'

import { SocialIcon } from '../icon/SocialIcon'

import { Colors } from '../constants'

const HeadshotOverlayIcon = (props: { name: string }): JSX.Element => {
  return (
    <li 
      style={{
        listStyleType: 'none',
        display: 'inline-block',
        margin: '0 0.5rem'
      }}
    ><SocialIcon name={props.name} />
    </li>
  )
}

const HeadshotOverlayIcons = (): JSX.Element => {
  return (
    <ul
      style={{
        margin: '0', padding: '0'
      }}
    >
      <HeadshotOverlayIcon name="facebook-f"/>
      <HeadshotOverlayIcon name="twitter" />
      <HeadshotOverlayIcon name="google-plus-g" />
      <HeadshotOverlayIcon name="instagram" />
    </ul>
  )
}

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
          <HeadshotOverlayIcons />
      </div>
    </div>
  )
}