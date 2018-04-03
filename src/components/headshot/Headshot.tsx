import * as React from 'react'

import { HeadshotOverlay } from './HeadshotOverlay'

interface HeadshotProps {
  src: string
}
interface HeadshotState {
  isHovered: boolean
}
export class Headshot extends React.Component<HeadshotProps, HeadshotState> {
  div: HTMLDivElement | null
  constructor(props: HeadshotProps) {
    super(props)

    this.state = { isHovered: false }
  }

  render() {
    const item = (
      <div 
        style={{
          width: '100%',
          position: 'relative',
          background: `url(${this.props.src})`,
          backgroundSize: 'cover',
          paddingTop: '100%'
        }}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
      >
        <HeadshotOverlay isVisible={this.state.isHovered} />
      </div>
    )
    return item
    // )
  }

  private _onMouseOver = () => { this.setState({ isHovered: true }) }
  private _onMouseOut = () => { this.setState({ isHovered: false }) }
}