const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  id,
  setSongs,
}) => {
  const selectSongHandler = async () => {
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt='Cover' />
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
