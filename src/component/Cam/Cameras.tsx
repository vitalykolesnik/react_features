import { useDevices } from "hooks/useDevices";
import { FC } from "react";

type PropsType = {
  setId: (id: string) => void;
};

export const Cameras: FC<PropsType> = ({ setId }) => {
  const { devices } = useDevices("videoinput");

  const onOpenDevice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setId(id);
  };

  const deviceList = devices.map((d: MediaDeviceInfo, i) => (
    <option className="text-left" key={i} value={d.deviceId}>
      {d.label}
    </option>
  ));

  return (
    <>
      <p className="px-2 text-xl text-left ">Devices: </p>
      <select
        className="px-2 w-full border-2 border-gray-600 rounded-lg"
        onChange={onOpenDevice}
      >
        {deviceList}
      </select>
    </>
  );
};
