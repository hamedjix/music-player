import React, { useRef, useState } from 'react';
//FontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
const Player = ({ currentSong, isPlaying, setIsPlaying, setCurrentSong }) => {
  //Ref
  const audioRef = useRef(null);
  //Time Format Function
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };
  //onClick Handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  // onTimeUpdate Handler
  const timeUpdateHandler = (e) => {
    setSongInfo({
      ...songInfo,
      current: e.target.currentTime,
      duration: e.target.duration,
    });
  };
  //Current Song Handler
  const currentSongHandler = () => {
    setCurrentSong();
  };
  //onChange Handler
  const onChangeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      current: e.target.value,
    });
  };

  //State
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.current)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.current}
          type='range'
          onChange={onChangeHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
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
          className='skipForward'
          size='2x'
          icon={faAngleRight}
          onClick={currentSongHandler}
        />
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
};

export default Player;
