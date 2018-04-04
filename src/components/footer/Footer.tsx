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
      <hr 
        style={{
          // backgroundColor: Colors.LightGrey,
          border: `1px solid ${Colors.LightGrey}`
        }}
      />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>Copyright (c)2018 Lindell.io All Rights reserved</p>
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
            display: 'flex'
          }}
        >
          <li style={{marginLeft: '1rem'}}>Privacy Policy</li>
          <li style={{marginLeft: '1rem'}}>Contact</li>
          <li style={{marginLeft: '1rem'}}>Support</li>
        </ul>
      </div>
    </Container>
  )
}