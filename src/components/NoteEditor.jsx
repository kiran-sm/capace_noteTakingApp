import React, { useState, useEffect } from 'react';

function NoteEditor({ selectedNote, updateNote, addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('Please enter a title and content for the note.');
      return;
    }
    if (selectedNote) {
      updateNote({
        ...selectedNote,
        title,
        content,
      });
    } else {
      addNote({
        id: new Date().getTime(),
        title,
        content,
      });
    }
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-editor">
      <h2>{selectedNote ? 'Edit Note' : 'Add Note'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">{selectedNote ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default NoteEditor;
