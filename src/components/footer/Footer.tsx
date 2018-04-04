import * as React from 'react'

import { Colors } from '../constants'

import { Container } from '../container'
import { Grid, } from '../Grid'
import { FooterContactColumn } from './FooterContactColumn'
import { FooterLinksColumn } from './FooterLinksColumn'
import { FooterBlogsColumn } from './FooterBlogsColumn'

export const Footer = (): JSX.Element => {
  return (
    <Container 
      backgroundColor={Colors.DarkGrey}
      padding={{
        left: '3rem',
        right: '3rem'
      }}
    >
      <Grid columns={3} maxWidth={900} gap="2rem">
        <FooterContactColumn />
        <FooterLinksColumn />
        <FooterBlogsColumn />
      </Grid>
    </Container>
  )
}