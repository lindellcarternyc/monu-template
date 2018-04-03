import * as React from 'react'

import { Colors } from '../constants'

import { Container } from '../container'
import { Grid, GridColumn } from '../Grid'

import { Details } from './Details'

export const DetailsPreview = (): JSX.Element => {
  return (
    <Container backgroundColor={Colors.Blue}>
      <Grid maxWidth={900}>
        <GridColumn>
          <Details 
            icon="smile"
            header="30,000"
            description="Happy Customers"
          />
        </GridColumn>
        <GridColumn>
          <Details 
            icon="cubes"
            header="10,000"
            description="Running Apps"
          />
        </GridColumn>
        <GridColumn>
          <Details 
            icon="user"
            header="50,000"
            description="Calls Answered"
          />
        </GridColumn>
        <GridColumn>
          <Details 
            icon="clipboard-check"
            header="20,540"
            description="Completed Projects"
          />
        </GridColumn>
      </Grid>
    </Container>
  )
}