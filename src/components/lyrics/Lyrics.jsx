import React from 'react';

export default function Lyrics({ lyrics, error, loading }) {
  if (loading) return <p className="loading">Recherche en cours...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!lyrics) return null;

  return (
    <pre className="lyrics">
      {lyrics}
    </pre>
  );
}
