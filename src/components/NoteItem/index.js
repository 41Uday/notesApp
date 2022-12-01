import {ListItem, ParaItemOne, ParaItemTwo} from './styledComponents'

const NoteItem = props => {
  const {item} = props
  const {name, note} = item
  return (
    <ListItem>
      <ParaItemOne>{name}</ParaItemOne>
      <ParaItemTwo>{note}</ParaItemTwo>
    </ListItem>
  )
}

export default NoteItem
