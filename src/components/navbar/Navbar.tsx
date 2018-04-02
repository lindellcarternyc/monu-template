import * as React from 'react'

import { NavbarBrand } from './NavbarBrand'
import { DesktopNavigation } from './DesktopNavigation'
import { NavbarMenuButton } from './NavbarMenuButton'
import { Colors } from '../constants'

const items = [
  {title: 'Home'},
  {title: 'About Us'},
  {title: 'Portfolio'},
  {title: 'Team'},
  {title: 'Services'},
  {
    title: 'Blog',
    options: [
      'Blog1',
      'Blog2',
      'Blog3',
      'Blog-detail'
    ]
  },
  {title: 'Contact Us'}
]

interface NavbarProps {
  screenSize: 'mobile' | 'desktop'
  fixed?: boolean
  menuActive?: boolean
  toggleMenu?: () => void
}
export const Navbar = (props: NavbarProps): JSX.Element => {
  const content = props.screenSize === 'desktop' 
    ? <DesktopNavigation items={items}/>
    : <NavbarMenuButton active={props.menuActive} onClick={props.toggleMenu}/>
  return (
    <div 
      style={{
        position: props.fixed ? 'fixed' : 'relative',
        width: '100%',
        height: '100px',
        padding: '1.5rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${Colors.DarkGrey}`,
        background: 'transparent',
        zIndex: 5
      }}
    >
      <NavbarBrand brandName="Lindell.io"/>
      {content}
    </div>
  )
}