import * as React from 'react'

import { Button, ButtonProps } from './Button'
import { ActionButtonBackground } from './ActionButtonBackground'

interface ActionButtonProps extends ButtonProps { 
  // fixed?: 'right'
}
interface ActionButtonState {
  isHovered: boolean
}

const styles = {
  position: 'relative' as 'relative',
  display: 'inline-block' as 'inline-block',
  zIndex: 4
}
export class ActionButton extends React.Component<ActionButtonProps, ActionButtonState> {
  constructor(props: ActionButtonProps) {
    super(props)

    this.state = { isHovered: false }
  }

  onMouseOver = () => { this.setState({ isHovered: true }) }
  onMouseOut = () => { this.setState({ isHovered: false }) }

  render() {
    const hoverColor = this.state.isHovered ? 'white' : undefined
    return (
      <div 
        onMouseOver={this.onMouseOver} 
        onMouseOut={this.onMouseOut}
        style={styles}
      >
        <ActionButtonBackground visible={this.state.isHovered} />
        <Button text={this.props.text} color={hoverColor} />
      </div>
    )
  }
} 