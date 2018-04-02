import { Colors } from '../constants'

export const makeStyles = (options: { color?: string }) => {
  return {
    background: 'transparent',
    border: `1px solid ${Colors.Blue}`,
    borderRadius: '2rem',
    paddingLeft: '2rem', paddingRight: '2rem',
    paddingTop: '0.75rem', paddingBottom: '0.75rem',
    fontWeight: 'bold' as 'bold',
    color: options.color || Colors.DarkGrey,
  }
}