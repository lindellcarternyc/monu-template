import * as React from 'react'

import { Colors } from '../constants'

import { FooterColumn } from './FooterColumn'
import { SocialIcons } from '../icon/SocialIcon'

const FooterContactListItem = (props: { text: string }): JSX.Element => {
  return (
    <li
      style={{
        marginLeft: '-2.5rem',
        marginBottom: '0.75rem'
      }}
    >{props.text}
    </li>
  )
}

const FooterContactList = (): JSX.Element => {
  return (
    <ul
      style={{
        listStyle: 'none',
        color: Colors.LightGrey
      }}
    >
      <FooterContactListItem text="1 (800) 555 - 5555" />
      <FooterContactListItem text="lindellcarternyc@gmail.com" />
      <FooterContactListItem text="Carter Enterprises" />
      <FooterContactListItem text="New York City, US" />
    </ul>
  )
}

export const FooterContactColumn = (props: {}): JSX.Element => {
  return (
    <FooterColumn header="Contact">
      <FooterContactList />
      <SocialIcons color="white" maxWidth={200}/>
    </FooterColumn>
  )
}