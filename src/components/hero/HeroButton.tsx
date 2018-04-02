import * as React from 'react'

import { Colors } from '../constants'

interface HeroButtonProps {
  action: 'previous' | 'next'
  visible: boolean
}

interface HeroButtonState {
  isHovered: boolean
}
export class HeroButton extends React.Component<HeroButtonProps, HeroButtonState> {
  constructor(props: HeroButtonProps) {
    super(props)

    this.state = { isHovered: false }
  }
  
  render() {
    return (
      <button
        style={this._styles}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
      >
        {this.props.action === 'previous' ? '<' : '>'}
      </button>
    )
  }

  private get _styles() {
    return {
      position: 'absolute' as 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '3rem', lineHeight: '3rem',
      width: '3.5rem', height: '3.5rem',
      borderRadius: '50%',
      border: 'none',
      background: this.state.isHovered === true ? 'black' : Colors.Blue,
      opacity: this.props.visible ? 1 : 0,
      color: 'white',
      left: this._getLeft(),
      right: this._getRight(),
      transition: 'all 0.3s ease'
    }
  }

  private _onMouseOver = () => { this.setState({isHovered: true }) }
  private _onMouseOut = () => { this.setState({ isHovered: false }) }
  private _getLeft (): string | undefined {
    if (this.props.action === 'previous') {
      return this.props.visible === true 
        ? '3rem' 
        : '-3rem'
    }
    return undefined
  }
  private _getRight (): string | undefined {
    if (this.props.action === 'next') {
      return this.props.visible === true ? '2rem' : '-4rem'
    }
    return undefined
  }
}
