import * as React from 'react'

import { NavbarList, NavbarListProps } from './NavbarList'
import { ActionButton } from '../button/ActionButton'

interface DesktopNavigationProps extends NavbarListProps { }
export const DesktopNavigation = (props: DesktopNavigationProps): JSX.Element => {
  return (
    <>
      <NavbarList items={props.items} />
      <div>
        <ActionButton text="Hire Us" />
      </div>
    </>
  )
}