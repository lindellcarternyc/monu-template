import * as React from 'react'

import { Colors } from '../constants'
import { FooterColumn } from './FooterColumn'

const Blog1 = require('../../assets/images/blogpics/blog-square1.jpg')

interface FooterBlogPreviewImageProps {
  src: string
}
const FooterBlogPreviewImage = (props: FooterBlogPreviewImageProps): JSX.Element => {
  return (
    <img src={props.src} style={{width: '80px', height: '80px'}}/>
  )
}

class FooterBlogPreviewHeader extends React.Component<{text: string}, { isHovered: boolean}> {
  constructor(props: { text: string }) {
    super(props)

    this.state = { isHovered: false }
  }

  render() {
    return (
      <h3
        style={{
          fontWeight: 100,
          color: this.state.isHovered ? Colors.Blue : Colors.LightGrey,
          transition: 'color 0.3s ease'
        }}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
      >{this.props.text}
      </h3>
    )
  }

  private _onMouseOver = () => {
    this.setState({ isHovered: true })
  }
  private _onMouseOut = () => {
    this.setState({ isHovered: false })
  }
}

interface FooterBlogPreviewProps {
  image: string
  header: string
  date: string
}
const FooterBlogPreview = (props: FooterBlogPreviewProps): JSX.Element => {
  return (
    <div 
      style={{
      marginBottom: '1rem',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gridColumnGap: '1rem',
      padding: '0'
    }}
    >
      <FooterBlogPreviewImage src={props.image}/>
      <div>
        <FooterBlogPreviewHeader text={props.header}/>
        <p>{props.date}</p>
      </div>
    </div>
  )
}

export const FooterBlogsColumn = (): JSX.Element => {
  return (
    <FooterColumn header="Blog">
      <FooterBlogPreview image={Blog1} header="Blog Title 1" date="24th Aug 2018"/>
      <FooterBlogPreview image={Blog1} header="Blog Title 2" date="24th Aug 2018"/>
    </FooterColumn>
  )
}