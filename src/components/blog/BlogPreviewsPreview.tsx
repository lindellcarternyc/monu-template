import * as React from 'react'

import { Container } from '../container'
import { Grid, GridColumn } from '../Grid'

import { BlogPreview } from './BlogPreview'

export const BlogPreviewsPreview = (): JSX.Element => {
  return (
    <Container>
      <Grid columns={3}>
        <GridColumn>
          <BlogPreview />
        </GridColumn>
        <GridColumn>
          <BlogPreview />
        </GridColumn>
        <GridColumn>
          <BlogPreview />
        </GridColumn>
      </Grid>
    </Container>
  )
}