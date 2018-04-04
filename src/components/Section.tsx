import * as React from 'react'

import { Colors } from './constants'

import { Container } from './container'

interface SectionProps {
  title: string
  subtitle: string
  children?: React.ReactNode
  backgroundColor?: string
}

const SectionTitleStyles = {
  textAlign: 'center',
  color: Colors.DarkGrey
}
export const Section = (props: SectionProps): JSX.Element => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <h2 
        style={SectionTitleStyles}
      >{props.title}
      </h2>
      <p 
        style={{
          ...SectionTitleStyles,
          marginBottom: '2rem'
        }}
      >{props.subtitle}
      </p>
      {props.children}
    </Container>
  )
}