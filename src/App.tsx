import * as React from 'react'

import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { ServicesPreview } from './components/card/ServicesPreview'

const Desktop = 944

interface AppState {
  isDesktop: boolean
  menuActive: boolean
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props) 
    
    this.state = {
      isDesktop: false,
      menuActive: false
    }
    
  }

  windowResize = () => {
    const width = window.innerWidth
    if ( width >= Desktop ) {
      this.setState({ isDesktop: true })
    } else {
      this.setState({ isDesktop: false })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResize)
  }

  toggleMenu = () => {
    const menuActive = !this.state.menuActive
    this.setState({ menuActive })
  }

  render() {
    return (
      <div>
        <Navbar 
          screenSize={this.state.isDesktop ? 'desktop' : 'mobile'}
          menuActive={this.state.menuActive}
          toggleMenu={this.toggleMenu}
          fixed
        />
        <Hero />
        <ServicesPreview />
      </div>
    )
  }
}

export default App
