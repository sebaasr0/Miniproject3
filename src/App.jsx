import { useState } from "react";
import PlaylistForm from "./components/PlaylistForm";
import SongList from "./components/SongList";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([
    { id: 1, name: "Blinding Lights", artist: "The Weeknd", genre: "Pop" },
    { id: 2, name: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { id: 3, name: "Lose Yourself", artist: "Eminem", genre: "Hip-Hop" },
  ]);
  const [editingSong, setEditingSong] = useState(null);

  const addSong = (song) => {
    const newSong = { ...song, id: Date.now() };
    setSongs([...songs, newSong]);
  };

  const deleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  const startEdit = (song) => {
    setEditingSong(song);
  };

  const updateSong = (updatedSong) => {
    setSongs(
      songs.map((song) => (song.id === updatedSong.id ? updatedSong : song))
    );
    setEditingSong(null);
  };

  const cancelEdit = () => {
    setEditingSong(null);
  };

  // Use reduce to count songs per genre
  const genreCounts = songs.reduce((acc, song) => {
    acc[song.genre] = (acc[song.genre] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="app">
      <header className="app-header">
        <h1>Playlist Manager</h1>
        <p className="subtitle">Organize your favorite tracks</p>
      </header>

      <main className="app-main">
        <section className="form-section">
          <PlaylistForm
            onAdd={addSong}
            onUpdate={updateSong}
            editingSong={editingSong}
            onCancelEdit={cancelEdit}
          />
        </section>

        <section className="list-section">
          <div className="genre-summary">
            <h3>Genre Summary</h3>
            <div className="genre-tags">
              {Object.entries(genreCounts).map(([genre, count]) => (
                <span key={genre} className="genre-tag">
                  {genre}: {count}
                </span>
              ))}
              {songs.length === 0 && (
                <span className="empty-tag">No songs yet</span>
              )}
            </div>
            <p className="total-count">Total Songs: {songs.length}</p>
          </div>
          <SongList
            songs={songs}
            onDelete={deleteSong}
            onEdit={startEdit}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
