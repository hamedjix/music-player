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
  setIsPlaying,
  setCurrentSong,
  playSongHandler,
  audioRef,
  setSongInfo,
  songInfo,
}) => {
  //Time Format Function
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  //Current Song Handler
  const currentSongHandler = () => {};
  //onChange Handler
  const onChangeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      current: e.target.value,
    });
  };

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
      </div>
    </div>
  );
};

export default Player;
