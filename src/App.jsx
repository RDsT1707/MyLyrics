import React, { useState } from 'react'; 
import Search from './components/SearchBar/SearchBar'; 
import Lyrics from './components/lyrics/Lyrics'; 
import './App.sass'; 

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
    setLoading(true);

    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
      if (!response.ok) throw new Error("Paroles non trouvées. Verifie que l'orthographe soit correct"); // Si erreur, on lève une exception
      const data = await response.json(); // Récupérer la réponse en JSON pour qu'elles ne soit plus en brute
      setLyrics(data.lyrics); // Mettre à jour l'état avec les paroles reçues
    } catch (err) {
      setError(err.message || "Erreur lors de la recherche.");
    } finally {
      setLoading(false); 
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
    <div className={`app-container ${theme}`}>
      <header>
        <h1>MY Lyrics</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Mode Sombre' : 'Mode Clair'}
        </button>
      </header>

      <Search onSearch={fetchLyrics} />

      <Lyrics lyrics={lyrics} error={error} loading={loading} />
    </div>
  );
}
