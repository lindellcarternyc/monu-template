import * as React from 'react'

import { Container } from '../container'
import { Grid, GridColumn } from '../Grid'

import { BlogPreview } from './BlogPreview'

const Blog1 = require('../../assets/images/blogpics/blog1.jpg')
const Blog2 = require('../../assets/images/blogpics/blog2.jpg')
const Blog3 = require('../../assets/images/blogpics/blog3.jpg')

const BlogTitle = 'How to Improve Your Sales Volume'
const BlogDate = '02 May'
const BlogDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, `

export const BlogPreviewsPreview = (): JSX.Element => {
  return (
    <Container>
      <Grid columns={3} maxWidth={900}>
        <GridColumn>
          <BlogPreview 
            image={Blog1}
            title={BlogTitle}
            date={BlogDate}
            description={BlogDescription}
          />
        </GridColumn>
        <GridColumn>
          <BlogPreview 
            image={Blog2}
            title={BlogTitle}
            date={BlogDate}
            description={BlogDescription}
          />
        </GridColumn>
        <GridColumn>
          <BlogPreview 
            image={Blog3}
            title={BlogTitle}
            date={BlogDate}
            description={BlogDescription}
          />
        </GridColumn>
      </Grid>
    </Container>
  )
}