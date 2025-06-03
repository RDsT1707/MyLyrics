import React, { useState } from 'react'; // Import React et useState pour gérer l'état
import Search from './components/SearchBar/SearchBar'; // Composant pour chercher les paroles
import Lyrics from './components/lyrics/Lyrics'; // Composant pour afficher les paroles
import './App.sass'; // Styles de l'application

export default function App() {
  // États pour stocker les paroles, le chargement, l'erreur et le thème
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('dark'); // Le thème sombre est activé par défaut

  // Fonction pour récupérer les paroles via l'API
  const fetchLyrics = async (artist, title) => {
    setLyrics(''); // Effacer les anciennes paroles
    setError(''); // Effacer les anciennes erreurs
    setLoading(true); // Indiquer que la recherche est en cours
    try {
      // Appel à l'API avec artiste et titre encodés dans l'URL
      const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
      if (!response.ok) throw new Error("Paroles non trouvées."); // Si erreur, on lève une exception
      const data = await response.json(); // Récupérer la réponse en JSON
      setLyrics(data.lyrics); // Mettre à jour l'état avec les paroles reçues
    } catch (err) {
      setError(err.message || "Erreur lors de la recherche."); // Afficher le message d'erreur
    } finally {
      setLoading(false); // Fin du chargement, peu importe le résultat
    }
  };

  // Fonction pour changer le thème entre clair et sombre
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    // Application avec un style qui change selon le thème choisi
    <div className={`app-container ${theme}`}>
      <header>
        <h1>MY Lyrics</h1>
        {/* Bouton pour changer le thème */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Mode Sombre' : 'Mode Clair'}
        </button>
      </header>

      {/* Zone de recherche avec callback pour lancer fetchLyrics */}
      <Search onSearch={fetchLyrics} />

      {/* Zone d'affichage des paroles, des erreurs ou du chargement */}
      <Lyrics lyrics={lyrics} error={error} loading={loading} />
    </div>
  );
}
