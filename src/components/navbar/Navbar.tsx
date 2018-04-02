import * as React from 'react'

import { NavbarBrand } from './NavbarBrand'
import { ActionButton } from '../button/ActionButton'
import { NavbarList } from './NavbarList'
import { Colors } from '../constants'
export const Navbar = (): JSX.Element => {
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: '100px',
        padding: '1.5rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${Colors.DarkGrey}` 
      }}
    >
      <NavbarBrand brandName="Lindell.io"/>
      <NavbarList 
        items={[
          {title: 'Home'},
          {title: 'About Us'},
          {title: 'Portfolio'},
          {title: 'Team'},
          {title: 'Services'},
          {title: 'Blog'},
          {title: 'Contact Us'}
        ]}
      />
      <ActionButton text="Hire Us" />
    </div>
  )
}