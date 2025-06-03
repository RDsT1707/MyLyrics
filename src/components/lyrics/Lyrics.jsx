import React from 'react';

// Composant qui affiche soit un message de chargement, 
// soit une erreur, soit les paroles reçues
export default function Lyrics({ lyrics, error, loading }) {
  // Si on est en train de charger les paroles, on affiche un message "Recherche en cours..."
  if (loading) return <p className="loading">Recherche en cours...</p>;

  // S'il y a une erreur  on affiche le message d'erreur
  if (error) return <p className="error">{error}</p>;

  // Si on n'a pas encore de paroles, on affiche rien
  if (!lyrics) return null;

  // Sinon, on affiche les paroles dans un bloc pour garder la mise en forme
  return (
    <pre className="lyrics">
      {lyrics}
    </pre>
  );
}
