import * as React from 'react'

import { NavbarListItem, NavbarListItemProps } from './NavbarListItem' 

export const NavbarList = (props: { items: NavbarListItemProps[] }): JSX.Element => {
  return (
    <ul 
      style={{
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'space-around',
      }}
    >
      {props.items.map(item => {
        return (
          <NavbarListItem key={item.title} {...item} />
        )
      })}
    </ul>
  )
}