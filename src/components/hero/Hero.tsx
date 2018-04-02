import * as React from 'react'

import { HeroButton } from './HeroButton'
import { HeroSlide } from './HeroSlide'
const HeroBackground = require('../../assets/images/hero-background.jpg')

interface HeroProps {
  
}
interface HeroState {
  isHovered: boolean
}
export class Hero extends React.Component<HeroProps, HeroState> {
  constructor(props: HeroProps) {
    super(props)

    this.state = { isHovered: false }
  }
  onMouseOver = () => { this.setState({ isHovered: true }) }
  onMouseOut = () => { this.setState({ isHovered: false }) }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          background: `url(${HeroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <HeroButton action="previous" visible={this.state.isHovered}/>
        <HeroSlide />
        <HeroButton action="next" visible={this.state.isHovered}/>
      </div>
    )
  }
}