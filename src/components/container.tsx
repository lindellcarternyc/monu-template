import * as React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  backgroundColor?: string
  backgroundImage?: string
}
export const Container = (props: ContainerProps): JSX.Element => {
  return (
    <div 
      style={{
        width: '100%',
        padding: '3rem 1rem',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: props.backgroundColor
      }}
    >
      {props.children}
    </div>
  )
}