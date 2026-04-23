import { useState } from "react";

export const useMic = () => {
  const [status, setStatus] = useState("idle");
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);

  async function loadDevices() {
    const all = await navigator.mediaDevices.enumerateDevices();
    const mics = all.filter(d => d.kind === "audioinput");
    setDevices(mics);
    setSelectedDeviceId(mics[0]?.deviceId);
  }

  async function requestMic() {
    setStatus("loading");
    setError(null);
    try {
      const s = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(s);
      setStatus("granted");
      await loadDevices();
    } catch (err) {
      setStatus("denied");
      setError(err.message);
    }
  }

  async function changeMic(deviceId) {
    stream?.getTracks().forEach(t => t.stop());
    const newStream = await navigator.mediaDevices.getUserMedia({
      audio: { deviceId: { exact: deviceId } },
    });
    setStream(newStream);
    setSelectedDeviceId(deviceId);
  }

  function stopMic() {
    stream?.getTracks().forEach(t => t.stop());
    setStream(null);
    setStatus("idle");
    setDevices([]);
    setSelectedDeviceId(null);
  }

  return {
    status,
    stream,
    error,
    devices,
    selectedDeviceId,
    requestMic,
    changeMic,
    stopMic,
  };
};