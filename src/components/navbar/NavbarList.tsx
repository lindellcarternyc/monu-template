import * as React from 'react'

import { NavbarListItem } from './NavbarListItem' 

export const NavbarList = (props: { items: { title: string }[] }): JSX.Element => {
  return (
    <ul 
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: '700px',
      }}
    >
      {props.items.map(item => {
        return (
          <NavbarListItem key={item.title} title={item.title} />
        )
      })}
    </ul>
  )
}