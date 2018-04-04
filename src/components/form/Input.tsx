import * as React from 'react'

interface InputProps {
  placeholder?: string
  type?: string
  inline?: boolean
}
export const Input = (props: InputProps): JSX.Element => {
  return (
      <input 
        style={{
          width: '100%',
          fontFamily: 'sans-serif',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '2rem',
          background: 'white',
          padding: '0.75rem 1.5rem',
          marginBottom: props.inline === true ? 0 : '1rem'
          }}
        type={props.type}
        placeholder={props.placeholder}
      />
  )
}