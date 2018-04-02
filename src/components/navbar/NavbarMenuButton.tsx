import * as React from 'react'

import { Colors } from '../constants'

const NavbarMebuBars = (): JSX.Element => {
  const BarStyles = {
    display: 'block',
    backgroundColor: Colors.DarkGrey,
    width: '100%',
    height: '3px',
  }
  return (
    <>
      <span style={BarStyles}/>
      <span style={{ ...BarStyles, marginTop: '3px', marginBottom: '3px' }}/>
      <span style={BarStyles}/>
    </>
  )
}

export const NavbarMenuButton = (props: { active?: boolean, onClick?: () => void }): JSX.Element => {
  return (
    <button
      style={{
        border: `2px solid ${Colors.DarkGrey}`,
        width: '2rem', height: '2rem',
        background: 'transparent'
      }}
      onClick={props.onClick}
    >
      {props.active === true 
        ? 'X'
        : <NavbarMebuBars />
      }
    </button>
  )
}