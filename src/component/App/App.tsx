import { FC } from "react";
import { Counter } from "component/Counter/Counter";
import { Camera } from "component/Cam/Camera";
import { VideoPlaylist } from "component/VideoPlayer/VideoPlaylist";

const App: FC<any> = () => {
  return (
    <>
      <div className="container text-center mx-auto bg-slate-100">
        <Counter />

        <VideoPlaylist />

        <Camera />
      </div>
    </>
  );
};

export default App;
