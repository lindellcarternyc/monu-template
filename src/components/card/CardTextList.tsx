import * as React from 'react'

interface CardTextListItemProps {
  item: string
}
const CardTextListItem = (props: CardTextListItemProps): JSX.Element => {
  const { item } = props
  return (
    <li
      style={{ marginBottom: '0.5em' }}
    >{item}
    </li>
  )
}
interface CardTextListProps {
  items: string[]
}
export const CardTextList = (props: CardTextListProps): JSX.Element => {
  const { items } = props
  return (
    <ul 
      style={{
        listStyle: 'none',
        padding: '0'
      }}
    >{items.map(item => <CardTextListItem key={item} item={item}/>)}
    </ul>
  )
}