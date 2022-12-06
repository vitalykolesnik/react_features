import { useCallback, useState } from "react";

export const useWebCam = (webcam: React.RefObject<HTMLVideoElement>) => {
  const [stream, setStream] = useState<MediaProvider | null>(null);

  if (webcam && webcam.current) webcam.current.srcObject = stream;

  const stopStream = () => setStream(null);

  const loadStream = useCallback(
    async (id: string, minWidth: number, minHeight: number) => {
      const constraints = {
        audio: false,
        video: {
          deviceId: id,
          width: { min: minWidth },
          height: { min: minHeight },
        },
      };
      setStream(await navigator.mediaDevices.getUserMedia(constraints));
    },
    []
  );

  return { stream, stopStream, loadStream };
};
