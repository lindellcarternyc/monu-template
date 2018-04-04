import * as React from 'react'

import { Colors } from '../constants'
import { Icon } from '../icon/Icon'
import { FooterColumn } from './FooterColumn'

interface FooterLinksListItemProps {
  text: string
}
interface FooterLinksListItemState {
  isHovered: boolean
}
class FooterLinksListItem extends React.Component<FooterLinksListItemProps, FooterLinksListItemState> {
  constructor(props: FooterLinksListItemProps) {
    super(props)

    this.state = { isHovered: false }
  }

  render() {
    return (
      <li
        style={{
          marginLeft: '0', 
          marginBottom: '0.75rem',
          listStyleType: 'none',
          color: this.state.isHovered ? Colors.Blue : Colors.LightGrey,
          transition: 'color 0.3s ease'
        }}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
      >
        <Icon name="chevron-right"/>
        <p
          style={{display: 'inline', paddingLeft: '0.5rem'}}
        >{this.props.text}
        </p>
      </li>
    )
  }

  private _onMouseOver = () => {
    this.setState({ isHovered: true })
  }
  private _onMouseOut = () => {
    this.setState({ isHovered: false })
  }
}

const FooterLinksList = (props: { links: string[] }): JSX.Element => {
  return (
    <ul
      style={{
        padding: '0',
        marginTop: '-0.5rem'
      }}
    >
      {props.links.map(link => {
        return <FooterLinksListItem key={link} text={link}/>
      })}
    </ul>
  )
}

export const FooterLinksColumn = (): JSX.Element => {
  return (
    <FooterColumn header="Useful Links">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <FooterLinksList 
          links={[
            'Home', 'Services', 'Work', 'Contact', 'Career'
          ]}
        />
        <FooterLinksList 
          links={[
            'About Us', 'Single Service', 'Blogs', 'Support', 'Privacy Policy'
          ]}
        />
      </div>
    </FooterColumn>
  )
}