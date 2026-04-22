
import { useState } from "react";

export const useMic = () => {
  const [status, setStatus] = useState("idle");
  const [stream, setStream] = useState(null);
  const [error,  setError]  = useState(null);

  async function requestMic() {
    setStatus("loading");
    setError(null);
    try {
      const s = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(s);
      setStatus("granted");
    } catch (err) {
      setStatus("denied");
      setError(err.message);
    }
  }

  function stopMic() {
    stream?.getTracks().forEach(t => t.stop());
    setStream(null);
    setStatus("idle");
  }
  return {
    status, 
    stream,
    error,
    requestMic,
    stopMic,
  }
}
