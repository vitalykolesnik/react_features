import { useEffect, useState } from "react";

export const useVideoPlayer = (video: any) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    isPlaying ? video.current.play() : video.current.pause();
  }, [isPlaying, video]);

  const [progress, setProgress] = useState(0);
  const handleOnTimeUpdate = () => {
    const newProgress =
      (video.current.currentTime / video.current.duration) * 100;
    setProgress(newProgress);
  };

  const handleVideoProgress = (event: any) => {
    const manualChange = Number(event.target.value);
    video.current.currentTime = (video.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };

  const [speed, setSpeed] = useState("1");
  const handleVideoSpeed = (event: any) => {
    const newSpeed = event.target.value;
    setSpeed(newSpeed);
  };
  useEffect(() => {
    video.current.playbackRate = speed;
  }, [speed, video]);

  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    isMuted ? (video.current.muted = true) : (video.current.muted = false);
  }, [isMuted, video]);

  return {
    state: { isPlaying, progress, speed, isMuted },
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};
