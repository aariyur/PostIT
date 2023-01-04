import NotesList from "./components/NotesList";
import { useState, useEffect } from "react";
import {nanoid} from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "12/05/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "15/04/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [... notes, newNote];
    setNotes(newNotes);
  }
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }
  const [search, setSearch] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  return (
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search setSearch={setSearch}/>
      <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(search.toLowerCase()))} handleAddNote={addNote} handleDeleteNote = {deleteNote} />
    </div>
  </div>
  
  )
}

export default App;
