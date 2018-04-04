import * as React from 'react'

import { Section } from '../Section'
import { Button } from '../button/Button'
import { Colors } from '../constants'
import { Input } from './Input'

interface ActionFormState {
  desktop: boolean
}
export class ActionForm extends React.Component<{}, ActionFormState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      desktop: window.innerWidth >= 900
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  resize = () => {
    this.setState({
      desktop: window.innerWidth >= 900
    })
  }
  render() {
    const { desktop } = this.state
    return (
      <Section 
        title="Are You Ready to be a success with us?"
        subtitle="Tell us about your story and your project."
        backgroundColor={Colors.LightBlue}
      >
        <form
          style={
            desktop 
            ? {
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridColumnGap: '1rem'
              }
            : undefined
          }
        >
          <Input placeholder="Your Name" inline={desktop}/>
          <Input placeholder="Email" type="email" inline={desktop}/>
          <Input placeholder="Your Phone" inline={desktop}/>
          <Button text="Subscribe" fill color="white" />
        </form>
      </Section>
    )
  }
}