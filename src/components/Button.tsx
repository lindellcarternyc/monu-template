import * as React from 'react'

interface ButtonProps {
  text: string
}

const styles = {
  background: 'transparent',
  border: '1px solid #3f7b9b',
  borderRadius: '2rem',
  paddingLeft: '2rem', paddingRight: '2rem',
  paddingTop: '0.75rem', paddingBottom: '0.75rem',
  fontWeight: 'bold' as 'bold',
  color: '#2e3438'
}
export const Button = (props: ButtonProps): JSX.Element => {
  const { text } = props
  return (
    <button style={styles}>{text}</button>
  )
}