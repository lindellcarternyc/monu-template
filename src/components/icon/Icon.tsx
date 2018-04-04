import * as React from 'react'

export interface IconProps {
  name: string
  brand?: boolean
  color?: string
  fontSize?: string
  hoverColor?: string
}
interface IconState {
  isHovered: boolean
}
export class Icon extends React.Component<IconProps, IconState> {
  constructor(props: IconProps) {
    super(props)

    this.state = { isHovered: false }
  }
  render() {
    const prefix = this.props.brand === true
    ? 'fab fa-'
    : 'fas fa-'
    const className = prefix + this.props.name
    return (
      <i 
        className={className}
        style={{
          color: this._color,
          fontSize: this.props.fontSize,
          transition: 'color 0.3s ease'
        }}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
      />
    )
  }

  private get _color(): string | undefined {
    if (this.props.hoverColor) {
      return this.state.isHovered 
      ? this.props.hoverColor
      : this.props.color
    } else {
      return this.props.color
    }
  }

  private _onMouseOver = () => {
    this.setState({ isHovered: true })
  }
  private _onMouseOut = () => {
    this.setState({ isHovered: false })
  }
}