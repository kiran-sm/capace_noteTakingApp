import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    setSelectedNote(null); // Deselect the deleted note
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <div className="main-content">
        <Search handleSearch={handleSearch} />
        <NoteList
          notes={filteredNotes}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          deleteNote={deleteNote}
        />
        <NoteEditor
          selectedNote={selectedNote}
          updateNote={updateNote}
          addNote={addNote}
        />
      </div>
    </div>
  );
}

export default App;
