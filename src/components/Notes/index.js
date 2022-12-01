import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Heading,
  CardOne,
  Input,
  MainCardOne,
  TextArea,
  Button,
  ButtonContainer,
  Img,
  CardTwo,
  ParaOne,
  ParaTwo,
  ListContainer,
} from './styledComponents'

const Notes = () => {
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeName = event => {
    setName(event.target.value)
  }
  const onChangeNote = event => {
    setNote(event.target.value)
  }
  const onClickAdd = event => {
    event.preventDefault()
    if (name !== '' && note !== '') {
      const newNote = {
        id: uuidv4(),
        name,
        note,
      }
      setNotesList(prevState => [...prevState, newNote])
      setName('')
      setNote('')
    }
  }
  return (
    <>
      <Heading>Notes</Heading>
      <MainCardOne>
        <CardOne onSubmit={onClickAdd}>
          <Input
            type="text"
            placeholder="Title"
            value={name}
            onChange={onChangeName}
          />
          <TextArea
            rows="5"
            cols="70"
            placeholder="Take a Note..."
            value={note}
            onChange={onChangeNote}
          />
          <ButtonContainer>
            <Button type="submit">Add</Button>
          </ButtonContainer>
        </CardOne>
      </MainCardOne>
      <CardTwo>
        {notesList.length > 0 ? (
          <>
            <ListContainer>
              {notesList.map(each => (
                <NoteItem key={each.id} item={each} />
              ))}
            </ListContainer>
          </>
        ) : (
          <>
            <Img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <ParaOne>No Notes Yet</ParaOne>
            <ParaTwo>Notes you add will appear here</ParaTwo>
          </>
        )}
      </CardTwo>
    </>
  )
}

export default Notes
