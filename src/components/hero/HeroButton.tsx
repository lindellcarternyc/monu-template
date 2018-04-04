import * as React from 'react'

import { Colors } from '../constants'

import { Icon } from '../icon/Icon'

interface HeroButtonProps {
  action: 'previous' | 'next'
  visible: boolean
}

interface HeroButtonState {
  isHovered: boolean
}

const HeroButtonIcon = (props: { action: 'previous' | 'next' }): JSX.Element => {
  const direction = props.action === 'previous' 
    ? 'left'
    : 'right'
  return (
    <Icon name={`chevron-${direction}`}/>
  )
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
        <HeroButtonIcon action={this.props.action} />
      </button>
    )
  }

  private get _styles() {
    return {
      position: 'absolute' as 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '2.5rem', lineHeight: '2.5rem',
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
