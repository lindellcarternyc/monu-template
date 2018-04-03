import * as React from 'react'

import { Colors } from '../constants'

import { Card } from './Card'
import { CardTitle } from './CardTitle'

interface PriceCardProps {
  isSelected?: boolean
  select?: () => void
  header: string
  price: string
  details: string[]
}
export const PriceCard = (props: PriceCardProps): JSX.Element => {
  return (
    <Card
      onClick={() => {
        if (props.select !== undefined) {
          props.select()
        }
      }}
      header={props.header}
      hover={{
        backgroundColor: 'white'
      }}
      text={props.details}
      action="Purchase"
      isSelected={props.isSelected}
    >
      <CardTitle text={props.price} color={Colors.Blue} />
    </Card>
  )
}