import React from 'react'
import AddNote from './AddNote';
import Note from './Note';


const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='notes-list'>
      {
        notes.map((notes) => <Note id={notes.id} text={notes.text} date={notes.date} handleDeleteNote={handleDeleteNote}/>)
      }
      <AddNote addNote={handleAddNote}/>
    </div>
  );
}

export default NotesList