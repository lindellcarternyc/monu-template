import * as React from 'react'

interface ContainerProps {
  children?: React.ReactNode
}
export const Container = (props: ContainerProps): JSX.Element => {
  return (
    <div 
      style={{
        width: '100%',
        marginLeft: '1rem',
        marginRight: '1rem',
        paddingTop: '1rem',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {props.children}
    </div>
  )
}