import * as React from 'react'

import { Container } from '../container'
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
      <Container backgroundColor={Colors.LightBlue}>
        <Grid maxWidth={800} columns={3}>
          <GridColumn>
            <PriceCard 
              isSelected={selectedId === 0}
              select={this.selectCard(0)}
            />
          </GridColumn>
          <GridColumn>
            <PriceCard 
              isSelected={selectedId === 1}
              select={this.selectCard(1)}
            />
          </GridColumn>
          <GridColumn>
            <PriceCard 
              isSelected={selectedId === 2} 
              select={this.selectCard(2)}
            />
          </GridColumn>
        </Grid>
      </Container>
    )
  }
}