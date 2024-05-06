import React from "react";

function Sidebar({ addNote }) {
  const handleAddNote = () => {
    addNote({
      id: new Date().getTime(),
      title: "",
      content: "",
    });
  };

  return (
    <div className="sidebar">
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default Sidebar;
