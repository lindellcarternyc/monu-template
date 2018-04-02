import * as React from 'react'

import { NavbarDropdownItem } from './NavbarDropdownItem'

import { Colors } from '../constants'

interface NavbarDropdownProps {
  visible: boolean
  options: string[]
}
export const NavbarDropdown = (props: NavbarDropdownProps): JSX.Element => {
  return (
    <ul
      style={{
        position: 'absolute',
        borderTop: `3px solid ${Colors.Blue}`,
        minWidth: '225px',
        padding: '1rem',
        top: props.visible ? '6.5rem' : '7.5rem',
        opacity: props.visible ? 1 : 0,
        transition: 'all 0.3s ease'
      }}
    >
      {props.options.map(option => {
        return (
          <NavbarDropdownItem key={option} title={option} />
        )
      })}
    </ul>
  )
}