import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className='library'>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
