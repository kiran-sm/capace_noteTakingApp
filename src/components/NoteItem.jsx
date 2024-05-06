import React from 'react';

function NoteItem({ note, isSelected, onSelectNote, onDeleteNote }) {
  return (
    <div
      className={`note-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelectNote}
    >
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={(e) => onDeleteNote()}>&times;</button>
    </div>
  );
}

export default NoteItem;
