import SongItem from "./SongItem";
import "./SongList.css";

function SongList({ songs, onDelete, onEdit }) {
  if (songs.length === 0) {
    return <p className="empty-message">Your playlist is empty. Add some songs!</p>;
  }

  return (
    <div className="song-list">
      <h2>Your Playlist</h2>
      <ul>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default SongList;
