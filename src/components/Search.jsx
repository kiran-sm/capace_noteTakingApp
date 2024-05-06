import React, { useState } from 'react';

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
