import * as React from 'react'

import { Grid, GridColumn } from '../Grid'
import { Headshot } from './Headshot'

const Headshot1 = require('../../assets/images/headshots/headshot1.jpg')
const Headshot2 = require('../../assets/images/headshots/headshot2.jpg')
const Headshot3 = require('../../assets/images/headshots/headshot3.jpg')
const Headshot4 = require('../../assets/images/headshots/headshot4.jpg')

export const HeadshotsPreview = (): JSX.Element => {
  return (
    <Grid gapless>
      <GridColumn>
        <Headshot src={Headshot1} />
      </GridColumn>
      <GridColumn>
        <Headshot src={Headshot2} />
      </GridColumn>
      <GridColumn>
        <Headshot src={Headshot3} />
      </GridColumn>
      <GridColumn>
        <Headshot src={Headshot4} />
      </GridColumn>
    </Grid>
  )
}