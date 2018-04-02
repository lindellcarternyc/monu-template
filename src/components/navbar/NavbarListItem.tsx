import * as React from 'react'

import { Colors } from '../constants'

interface NavbarListItemProps {
  title: string
}
interface NavbarListItemState {
  isHovered: boolean
}
export class NavbarListItem extends React.Component<NavbarListItemProps, NavbarListItemState> {
  constructor(props: NavbarListItemProps) {
    super(props)

    this.state = {
      isHovered: false
    }
  }

  onMouseOver = () => { this.setState({ isHovered: true }) }
  onMouseOut = () => { this.setState({ isHovered: false }) }

  render() {
    return (
      <li
        style={{
          listStyleType: 'none',
          padding: '0 1rem',
          color: this.state.isHovered ? Colors.Blue : Colors.DarkGrey,
          fontWeight: 'bold',
          fontSize: '0.85rem',
          transition: 'color 0.3s ease'
        }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >{this.props.title}
      </li>
    )
  }
}