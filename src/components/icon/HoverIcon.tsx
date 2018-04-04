import * as React from 'react'

import { IconProps, Icon } from './Icon'

interface HoverIconProps extends IconProps {
  hoverColor: string
}
interface HoverIconState {
  isHovered: boolean
}

export class HoverIcon extends React.Component<HoverIconProps, HoverIconState> {
  constructor(props: HoverIconProps) {
    super(props)

    this.state = { isHovered: false }
  }

  render() {
    let { hoverColor, color, ...rest } = this.props
    color = this.state.isHovered ? hoverColor : color
    return (
      <div
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
      >
        <Icon
          color={color} 
          {...rest} 
        />
      </div>
    )
  }

  private _onMouseOver = () => { this.setState({ isHovered: true }) }
  private _onMouseOut = () => { this.setState({ isHovered: false }) }
}
