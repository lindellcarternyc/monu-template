import * as React from 'react'

import { Icon } from '../Icon'

const DetailsIcon = (props: { name: string }): JSX.Element => {
  return (
    <div><Icon fontSize="2.5rem" name={props.name}/></div>
  )
}
const DetailsHeader = (props: { text: string }): JSX.Element => {
  const style = {
    fontSize: '2.5rem',
    fontWeight: 100 as 100,
    margin: '0.5rem 0'
  }
  return (
    <h2 style={style}>{props.text}</h2>
  )
}

const DetailsDescription = (props: { text: string }): JSX.Element => {
  return (
    <p style={{marginTop: 0}}>{props.text}</p>
  )
}

interface DetailsProps {
  icon: string
  header: string
  description: string
}
export const Details = (props: DetailsProps): JSX.Element => {
  return (
    <div
      style={{
        color: 'white',
        textAlign: 'center'
      }}
    >
      <DetailsIcon name={props.icon} />
      <DetailsHeader text={props.header} />
      <DetailsDescription text={props.description} />
    </div>
  )
}