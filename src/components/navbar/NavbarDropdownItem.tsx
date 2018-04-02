import * as React from 'react'

import { Colors } from '../constants'

interface NavbarDropdownItemProps {
  title: string
}
interface NavbarDropdownItemState {
  isHovered: boolean
}
export class NavbarDropdownItem extends React.Component<NavbarDropdownItemProps, NavbarDropdownItemState> {
  constructor(props: NavbarDropdownItemProps) {
    super(props)

    this.state = { isHovered: false }
  }

  onMouseOver = () => { this.setState({ isHovered: true }) }
  onMouseOut = () => { this.setState({ isHovered: false }) }

  render() {
    return (
      <li 
        style={{
          listStyleType: 'none',
          marginBottom: '1rem',
          transition: 'color 0.3s ease',
          color: this.state.isHovered 
            ? Colors.Blue 
            : Colors.DarkGrey,
          fontWeight: 'normal'
        }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >{this.props.title}
      </li>
    )
  }
}