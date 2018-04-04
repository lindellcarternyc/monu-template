import * as React from 'react'
import { GridColumn } from '../Grid'

interface FooterColumnHeaderProps {
  text: string
}
const FooterColumnHeader = (props: FooterColumnHeaderProps): JSX.Element => {
  return (
    <h2 style={{color: 'white'}}>{props.text}</h2>
  )
}

interface FooterColumnProps {
  header: string
  children?: React.ReactNode
}
export const FooterColumn = (props: FooterColumnProps): JSX.Element => {
  return (
    <GridColumn>
      <FooterColumnHeader text={props.header}/>
      {props.children}
    </GridColumn>
  )
}