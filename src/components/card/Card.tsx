import * as React from 'react'

import { Colors } from '../constants'

import { CardIcon } from './CardIcon'
import { CardTitle } from './CardTitle'
import { CardText } from './CardText'
import { CardAction, CardActionProps } from './CardAction'

const filterChildren = (children: React.ReactNode, typeName: string) => {
  return React.Children.toArray(children).filter(child => {
    return (child as { type: { name: string }}).type.name === typeName
  })[0]
}

interface CardProps {
  children?: React.ReactNode
  icon?: string
  text?: string
  title?: string
  action?: string
  rounded?: boolean
  hoverColor?: string
  hover?: {
    textColor?: string
    backgroundColor?: string
    titleColor?: string
    action?: boolean
  }
}
interface CardState {
  isHovered: boolean
}
export class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props)

    this.state = {
      isHovered: false
    }
  }

  render() {
    return (
      <div
        style={{
          border: `1px solid ${Colors.DarkGrey}`,
          borderRadius: this.props.rounded ? '0.5rem' : undefined,
          background: this._background,
          position: 'relative',
          padding: '2rem',
          textAlign: 'center',
          height: '100%'
        }}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}
      >
        {this._renderIcon()}
        {this._renderTitle()}
        {this._renderText()}
        {this._renderAction()}
      </div>
    )
  }

  private _onMouseOver = () => {
    this.setState ({ isHovered: true })
  }
  private _onMouseOut = () => {
    this.setState({ isHovered: false })
  }

  private _renderIcon() {
    const { icon, children } = this.props
    if (icon !== undefined) {
      return (
        <CardIcon name={icon}/>
      )
    } else if ( children !== undefined ) {
      const Icon = filterChildren(children, 'CardIcon')
      return Icon
    }
    return
  }

  private _renderTitle() {
    const { title, children } = this.props
    if (title !== undefined) {
      return (
        <CardTitle text={title} color={this._textColor}/>
      )
    } else if (children !== undefined) {
      const Title = filterChildren(children, 'CardTitle')
      if ( Title !== undefined ) {
        return React.cloneElement(
          Title as React.ReactElement<{color: string}>,
          {color: this._titleColor}
        )
      }
      return Title
    }
    return
  }

  private _renderText() {
    const { text, children } = this.props
    if ( text !== undefined ) {
      return <CardText content={text} color={this._textColor}/>
    } else if ( children !== undefined ) {
      const Text = filterChildren(children, 'CardText')
      if ( Text !== undefined ) {
        return React.cloneElement((Text as React.ReactElement<{color: string}>), {color: this._textColor})
      } else {
        return 
      }
    } else {
      return
    }
  }

  private _renderAction(): React.ReactElement<CardActionProps> | undefined {
    const { action, hover, children } = this.props
    let Action: React.ReactElement<CardActionProps> | undefined = undefined

    if ( action !== undefined ) {
      if ( hover && hover.action === true ) {
        Action = <CardAction text={action} isHovered={this.state.isHovered} />
      } else {
        Action = <CardAction text={action} />
      }
    } else if ( children !== undefined ) {
      const Element = filterChildren(children, 'CardAction')
      if (Element !== undefined) {
        if ( hover && hover.action === true ) {
          return React.cloneElement(
            Element as React.ReactElement<{isHovered: boolean, text: string}>,
            {isHovered: this.state.isHovered}
          )
        } 
      }
    }

    return Action
  }

  private get _background(): string | 'transparent' {
    if (this.state.isHovered) {
      if (this.props.hover !== undefined) {
        return this.props.hover.backgroundColor || 'transparent'
      } else {
        return 'transparent'
      }
    }
    return 'transparent'
  }

  private get _textColor(): string | undefined {
    if ( this.state.isHovered ) {
      if ( this.props.hover ) {
        return this.props.hover.textColor
      } else {
        return undefined
      }
    } 
    return undefined
  }

  private get _titleColor(): string | undefined {
    return this.state.isHovered
      ? this.props.hover 
        ? this.props.hover.titleColor
        : undefined
      : undefined
  }
}