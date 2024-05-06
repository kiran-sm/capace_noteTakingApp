import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, selectedNote, setSelectedNote, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          isSelected={note.id === selectedNote?.id}
          onSelectNote={() => setSelectedNote(note)}
          onDeleteNote={() => deleteNote(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;
