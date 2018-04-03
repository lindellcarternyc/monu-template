import * as React from 'react'

import { Colors } from '../constants'

import { Card } from './Card'
import { CardTitle } from './CardTitle'

interface PriceCardProps {
  isSelected?: boolean
  select?: () => void
}
export const PriceCard = (props: PriceCardProps): JSX.Element => {
  return (
    <Card
      onClick={() => {
        if (props.select !== undefined) {
          props.select()
        }
      }}
      header="Basic"
      hover={{
        backgroundColor: 'white'
      }}
      text={[
        'PSD Included',
        'Free Installation',
        'Free One Year Domain',
        'Free Six Months Hosting',
        'Full Support'
      ]}
      action="Purchase"
      isSelected={props.isSelected}
    >
      <CardTitle text="300" color={Colors.Blue} />
    </Card>
  )
}