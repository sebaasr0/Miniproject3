import { useState, useEffect } from "react";
import "./PlaylistForm.css";

function PlaylistForm({ onAdd, onUpdate, editingSong, onCancelEdit }) {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (editingSong) {
      setName(editingSong.name);
      setArtist(editingSong.artist);
      setGenre(editingSong.genre);
    } else {
      setName("");
      setArtist("");
      setGenre("");
    }
  }, [editingSong]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !artist.trim() || !genre.trim()) return;

    if (editingSong) {
      onUpdate({ ...editingSong, name, artist, genre });
    } else {
      onAdd({ name, artist, genre });
    }

    setName("");
    setArtist("");
    setGenre("");
  };

  return (
    <form className="playlist-form" onSubmit={handleSubmit}>
      <h2>{editingSong ? "Edit Song" : "Add a New Song"}</h2>
      <div className="form-group">
        <label htmlFor="song-name">Song Name</label>
        <input
          id="song-name"
          type="text"
          placeholder="Enter song name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          type="text"
          placeholder="Enter artist name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <input
          id="genre"
          type="text"
          placeholder="Enter genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">
          {editingSong ? "Update Song" : "Add Song"}
        </button>
        {editingSong && (
          <button type="button" className="btn btn-cancel" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default PlaylistForm;
