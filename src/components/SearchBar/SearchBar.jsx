import { useState } from 'react';
import React from 'react';

export default function Search({ onSearch }) {
  // State pour stocker le nom de l'artiste tapé par l'utilisateur
  const [artist, setArtist] = useState('');
  // State pour stocker le titre de la chanson tapé par l'utilisateur
  const [title, setTitle] = useState('');

  // Fonction qui gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page au submit
    // Si artiste ou titre sont vides (après suppression des espaces), on ne fait rien
    if (!artist.trim() || !title.trim()) return;
    // Sinon on appelle la fonction passée en props pour chercher les paroles
    onSearch(artist, title);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de l'artiste"
        value={artist} // valeur contrôlée par le state artist
        onChange={(e) => setArtist(e.target.value)} // mise à jour du state à chaque frappe
      />
      <input
        type="text"
        placeholder="Titre de la chanson"
        value={title} // valeur contrôlée par le state title
        onChange={(e) => setTitle(e.target.value)} // mise à jour du state à chaque frappe
      />
      {/* Bouton submit pour lancer la recherche */}
      <button type="submit">Chercher les paroles</button>
    </form>
  );
}
