import * as React from 'react'

import { Colors } from '../constants'
import { ActionButton } from '../button/ActionButton'

const Blog1 = require('../../assets/images/blogpics/blog1.jpg')

const BlogPreviewImage = (): JSX.Element => {
  return (
    <img 
      src={Blog1}
      style={{
        width: '100%'
      }}
    />
  )
}

const BlogPreviewTitle = (): JSX.Element => {
  return (
    <h3
      style={{
        color: Colors.DarkGrey,
        margin: '0.75em 0'
      }}
    >How to Improve Your Sales Volume
    </h3>
  )
}

const BlogPreviewDate = (): JSX.Element => {
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
        07 May
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

const BlogPreviewDescription = (): JSX.Element => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod teminc ididunt ut labore et dolore.Lorem ipsum dolor sit amet.
    </p>
  )
}

export const BlogPreview = (): JSX.Element => {
  return (
    <div
      style={{
        width: '100%',
        marginBottom: '1.5rem'
      }}
    >
      <BlogPreviewImage />
      <BlogPreviewTitle />
      <BlogPreviewDate />
      <BlogPreviewDescription />
      <ActionButton text="Continue Reading" />
    </div>
  )
}