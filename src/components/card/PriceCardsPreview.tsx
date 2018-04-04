import * as React from 'react'

import { Section } from '../Section'
import { Grid, GridColumn } from '../Grid'
import { PriceCard } from './PriceCard'

import { Colors } from '../constants'

interface PriceCardsPreviewState {
  selectedId: 0 | 1 | 2
}
export class PriceCardsPreview extends React.Component<{}, PriceCardsPreviewState> {
  constructor(props: {}) {
    super(props)

    this.state = { selectedId: 1 }
  }

  selectCard = (id: 0 | 1 | 2) => () => {
    this.setState({ selectedId: id})
  }
  render() {
    const { selectedId } = this.state
    return (
      <Section 
        title="Our Pricing"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        backgroundColor={Colors.LightBlue}
      >
        <Grid maxWidth={800} columns={3}>
          <GridColumn>
            <PriceCard 
              isSelected={selectedId === 0}
              select={this.selectCard(0)}
              header="Basic"
              price="100"
              details={[
                'PSD Included',
                'Free Installation',
                'Free One Year Domain',
                'Free Six Months Hosting',
                'Full Support'
              ]}
            />
          </GridColumn>
          <GridColumn>
            <PriceCard 
              isSelected={selectedId === 1}
              select={this.selectCard(1)}
              header="Advanced"
              price="300"
              details={[
                'PSD Included',
                'Free Installation',
                'Free One Year Domain',
                'Free Six Months Hosting',
                'Full Support'
              ]}
            />
          </GridColumn>
          <GridColumn>
            <PriceCard 
              isSelected={selectedId === 2} 
              select={this.selectCard(2)}
              header="Pro"
              price="500"
              details={[
                'PSD Included',
                'Free Installation',
                'Free One Year Domain',
                'Free Six Months Hosting',
                'Full Support'
              ]}
            />
          </GridColumn>
        </Grid>
      </Section>
    )
  }
}