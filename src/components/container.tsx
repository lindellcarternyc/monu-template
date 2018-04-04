import * as React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  backgroundColor?: string
  backgroundImage?: string
  padding?: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
}
export const Container = (props: ContainerProps): JSX.Element => {
  const padding: { [key: string]: string} = { 
    paddingTop: props.padding && props.padding.top || '3rem',
    paddingBottom: props.padding && props.padding.bottom || '3rem',
    paddingLeft: props.padding && props.padding.left || '1rem',
    paddingRight: props.padding && props.padding.right || '1rem'
  }
  return (
    <div 
      style={{
        width: '100%',
        ...padding,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: props.backgroundColor
      }}
    >
      {props.children}
    </div>
  )
}