import { useEffect } from 'react';
import { playAudio } from '../asyncPlay';
//FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

//Component Start
const Player = ({
  currentSong,
  isPlaying,
  setCurrentSong,
  playSongHandler,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setSongs,
}) => {
  //Time Format Function
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  //onChange Handler
  const onChangeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      current: e.target.value,
    });
  };

  //Skip Track Handler
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-previous') {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying, audioRef);
  };

  //useEffect
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong]);

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.current)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.current}
          type='range'
          onChange={onChangeHandler}
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-previous')}
          className='skipPrevious'
          size='2x'
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className='skipForward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
