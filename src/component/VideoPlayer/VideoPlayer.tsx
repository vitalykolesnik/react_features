import React from "react";
import { useVideoPlayer } from "hooks/useVideoPlayer";
import { PlayIcon } from "component/VideoPlayer/Icons/PlayIcon";
import { PauseIcon } from "component/VideoPlayer/Icons/PauseIcon";
import { UnmutedIcon } from "component/VideoPlayer/Icons/UnmutedIcon";
import { MutedIcon } from "component/VideoPlayer/Icons/MutedIcon";

type PropsType = {
  source: any;
};

export const VideoPlayer: React.FC<PropsType> = React.memo(({ source }) => {
  const videoRef = React.useRef(null);
  const {
    state,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoRef);

  return (
    <>
      <div className="flex flex-col relative m-2 cursor-pointer shadow-lg shadow-black aspect-video rounded-xl ">
        <video
          src={source}
          ref={videoRef}
          onTimeUpdate={handleOnTimeUpdate}
          onClick={togglePlay}
          className="h-auto w-auto rounded-xl "
          muted={true}
        />
        <div
          className="flex flex-row absolute h-6 bottom-2 inset-x w-full justify-between \n
        opacity-0 hover:opacity-100 duration-100 delay-500 "
        >
          <button
            className="ml-2 rounded-xl shadow-md \n
          border-white text-slate-100 bg-pink-800 hover:bg-pink-600 shadow-gray-800 \n
          transition ease-in-out duration-400"
            onClick={togglePlay}
          >
            {!state.isPlaying ? <PlayIcon /> : <PauseIcon />}
          </button>
          <input
            className="flex-grow mx-2 cursor-pointer"
            type="range"
            min="0"
            max="100"
            value={state.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="m-1 text-xs rounded-lg shadow-mdtext-center cursor-pointer shadow-gray-800"
            value={state.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
          <button
            className="mx-2 rounded-xl shadow-md \n
          border-white text-slate-100 bg-pink-800 hover:bg-pink-600  shadow-gray-800 \n
          transition ease-in-out duration-400"
            onClick={toggleMute}
          >
            {!state.isMuted ? <UnmutedIcon /> : <MutedIcon />}
          </button>
        </div>
      </div>
    </>
  );
});
