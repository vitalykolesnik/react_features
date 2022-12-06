import { useEffect, useState } from "react";

export const useDevices = (type: string) => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

  async function getConnectedDevices(type: any) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const result = devices.filter((device) => device.kind === type);
    setDevices(result);
  }
  useEffect(() => {
    getConnectedDevices(type);
  }, [type]);

  return { devices };
};
