import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice'

const SongCard = ({ song, i, data }) => {
  const dispatch = useDispatch();
  // initial State불러오기
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false))
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  };
  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/5
    bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img src={song?.images?.coverart} alt="song_img" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="text-white font-semibold text-lg truncate">
          <Link to={`/song/${song?.key}`}>{song?.title}</Link>
        </p>
        <p className="text-sm truncate mt-1 text-gray-300">
          <Link
            to={
              song?.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song?.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard