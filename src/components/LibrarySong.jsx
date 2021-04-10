const LibrarySong = ({ song, setCurrentSong }) => {
  const selectSong = (e) => {
    console.log(e.target);
  };
  return (
    <div onClick={selectSong} className='library-song'>
      <img src={song.cover} alt='Cover' />
      <div>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
