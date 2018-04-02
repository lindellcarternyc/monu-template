import * as React from 'react'

import { Colors } from '../constants'

import { Card } from './Card'
import { CardIcon } from './CardIcon'
import { CardTitle } from './CardTitle'
import { CardText } from './CardText'
import { CardAction } from './CardAction'

export interface ServiceCardProps {
  icon: string
  title: string
  text: string
  action: string
}
export const ServiceCard = (props: ServiceCardProps): JSX.Element => {
  return (
    <Card 
      rounded
      hover={{
        backgroundColor: Colors.DarkGrey,
        titleColor: 'white',
        textColor: 'white',
        action: true
      }}
    >
      <CardIcon name={props.icon}/>
      <CardTitle text={props.title}/>
      <CardText content={props.text}/>
      <CardAction text={props.action}/>
    </Card>
  )
}