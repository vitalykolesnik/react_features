import { FC, useRef, useState } from "react";
import { Cameras } from "component/Cam/Cameras";
import { useWebCam } from "hooks/useWebCam";

export const Camera: FC = () => {
  const [id, setId] = useState("");
  const handleSetId = (newId: string) => {
    setId(newId);
  };

  const webcam = useRef<HTMLVideoElement>(null);
  const { stream, loadStream, stopStream } = useWebCam(webcam);

  const handleLoadStream = async () => {
    if (stream) stopStream();
    else loadStream(id, 640, 480);
  };

  return (
    <>
      <p className="py-4 text-2xl font-bold underline">Web camera</p>
      <Cameras setId={handleSetId} />
      <div className="my-6 mx-auto w-1/3 shadow-lg shadow-black rounded-xl cursor-pointer ">
        <video onClick={handleLoadStream} ref={webcam} autoPlay />
      </div>
    </>
  );
};
