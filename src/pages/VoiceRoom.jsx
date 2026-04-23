import { useMic } from "../hooks/useMic";

export const VoiceRoom = () => {
  const { error, requestMic, changeMic, stopMic, status, devices, selectedDeviceId } = useMic();

  return (
    <div>
      {status === "idle" &&
        <button onClick={requestMic}>🎤 Enable Mic</button>}

      {status === "loading" &&
        <p>Waiting for permission…</p>}

      {status === "granted" && <>
        <p>✅ Mic is live!</p>
        <select value={selectedDeviceId} onChange={e => changeMic(e.target.value)}>
          {devices.map(d => (
            <option key={d.deviceId} value={d.deviceId}>
              {d.label || "Unknown Mic"}
            </option>
          ))}
        </select>
        <button onClick={stopMic}>Stop</button>
      </>}

      {status === "denied" && <>
        <p>❌ Blocked: {error}</p>
        <button onClick={requestMic}>Try again</button>
      </>}
    </div>
  );
};