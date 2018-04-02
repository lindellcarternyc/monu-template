import * as React from 'react'

import { Colors } from '../constants'

export const NavbarBrand = (props: { brandName: string}): JSX.Element => {
  return (
    <h1
      style={{
        fontSize: '2rem', 
        marginTop: '0',
        color: Colors.DarkGrey
    }}
    >{props.brandName}
    </h1>
  )
}