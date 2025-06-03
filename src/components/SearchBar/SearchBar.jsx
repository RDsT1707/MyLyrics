import React, { useState } from 'react';

export default function Search({ onSearch }) {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!artist.trim() || !title.trim()) return;
    onSearch(artist, title);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de l'artiste"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Titre de la chanson"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Chercher les paroles</button>
    </form>
  );
}
