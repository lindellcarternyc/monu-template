export const makeStyles = (options: { color?: string }) => {
  return {
    background: 'transparent',
    border: '1px solid #3f7b9b',
    borderRadius: '2rem',
    paddingLeft: '2rem', paddingRight: '2rem',
    paddingTop: '0.75rem', paddingBottom: '0.75rem',
    fontWeight: 'bold' as 'bold',
    color: options.color || '#2e3438',
  }
}