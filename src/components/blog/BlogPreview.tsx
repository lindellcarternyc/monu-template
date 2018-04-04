import * as React from 'react'

import { Colors } from '../constants'
import { ActionButton } from '../button/ActionButton'

const BlogPreviewImage = (props: { src: string }): JSX.Element => {
  return (
    <img 
      src={props.src}
      style={{
        width: '100%'
      }}
    />
  )
}

const BlogPreviewTitle = (props: { text: string }): JSX.Element => {
  return (
    <h3
      style={{
        color: Colors.DarkGrey,
        margin: '0.75em 0'
      }}
    >{props.text}
    </h3>
  )
}

const BlogPreviewDate = (props: { date: string }): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '-1rem 0'
      }}
    >
      <p 
        style={{
          color: Colors.DarkGrey,
          display: 'inline-block'
        }}
      >
        {props.date}
      </p>
      <div 
        style={{
          width: '3rem',
          height: '1px',
          backgroundColor: Colors.DarkGrey,
          marginLeft: '1rem'
        }}
      />
    </div>
  )
}

const BlogPreviewDescription = (props: { text: string }): JSX.Element => {
  return (
    <p>
      {props.text}
    </p>
  )
}

interface BlogPreviewProps {
  image: string
  title: string
  date: string
  description: string
}
export const BlogPreview = (props: BlogPreviewProps): JSX.Element => {
  const { image, title, date, description } = props
  return (
    <div
      style={{
        width: '100%',
        marginBottom: '1.5rem'
      }}
    >
      <BlogPreviewImage src={image} />
      <BlogPreviewTitle text={title} />
      <BlogPreviewDate date={date} />
      <BlogPreviewDescription text={description} />
      <ActionButton text="Continue Reading" />
    </div>
  )
}