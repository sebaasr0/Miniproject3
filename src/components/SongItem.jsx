import "./SongItem.css";

function SongItem({ song, onDelete, onEdit }) {
  return (
    <li className="song-item">
      <div className="song-info">
        <span className="song-name">{song.name}</span>
        <span className="song-artist">{song.artist}</span>
        <span className="song-genre">{song.genre}</span>
      </div>
      <div className="song-actions">
        <button className="btn btn-edit" onClick={() => onEdit(song)}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(song.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default SongItem;
