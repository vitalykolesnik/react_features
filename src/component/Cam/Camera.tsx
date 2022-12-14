import React from "react";
import { Cameras } from "component/Cam/Cameras";
import { useWebCam } from "hooks/useWebCam";

export const Camera: React.FC = () => {
  const [id, setId] = React.useState("");
  const handleSetId = (newId: string) => {
    setId(newId);
  };

  const webcam = React.useRef<HTMLVideoElement>(null);
  const { stream, loadStream, stopStream } = useWebCam(webcam);

  const handleLoadStream = async () => {
    if (stream) stopStream();
    else loadStream(id, 640, 480);
  };

  return (
    <>
      <p className="py-4 text-2xl font-bold underline">Web camera</p>
      <Cameras setId={handleSetId} />
      <div className="my-6 mx-auto w-1/3 h-64 shadow-lg shadow-black rounded-xl cursor-pointer ">
        <video
          className="rounded-xl"
          onClick={handleLoadStream}
          ref={webcam}
          autoPlay
        />
      </div>
    </>
  );
};
