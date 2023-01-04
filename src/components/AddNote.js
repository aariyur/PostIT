import React from 'react';
import { useState } from 'react';

const AddNote = ({addNote}) => {
  const [noteText, setNoteText] = useState('');
  const charLength = 200;
  const [count, setCount] = useState(charLength);

  const handleChange = (event) => {
    if (charLength - event.target.value.length >= 0){
      setCount(charLength - event.target.value.length);
      setNoteText(event.target.value);
    }
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
      addNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className='note new'>
      <textarea rows='8' cols='10' placeholder='Type to add a note' onChange={handleChange} value={noteText}></textarea>
      <div className='note-footer'>
        <small>{count} Remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote