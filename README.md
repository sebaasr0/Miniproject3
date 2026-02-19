# Playlist Manager

**Author:** Sebastian Rodriguez

## Introduction

Playlist Manager is a simple React application that lets you organize your favorite music tracks. You can add new songs, view your playlist, edit song details, and remove songs you no longer want. The app also includes a genre summary section that dynamically counts how many songs belong to each genre.

## Features

- **Add** new songs with a name, artist, and genre
- **View** all songs displayed as a list
- **Edit** existing songs to update their details
- **Delete** songs from the playlist
- **Genre Summary** `reduce` to count songs per genre

## Components

| Component | Description |
|-----------|-------------|
| `App` | Root component that holds the song state and all CRUD logic |
| `PlaylistForm` | Form component for adding a new song or editing an existing one |
| `SongList` | Renders the list of songs using `map` |
| `SongItem` | Represents a single song with edit and delete buttons |

## Key React Concepts Used

- **useState** for managing the songs array and form state
- **useEffect** to populate the form when editing a song
- **props** to pass data and callback functions between components
- **map** to render the list of songs
- **filter** to remove a song by ID
- **reduce** to calculate genre counts

## How to Run

```bash
npm install
npm run dev
```

## Built With

- React
- Vite
