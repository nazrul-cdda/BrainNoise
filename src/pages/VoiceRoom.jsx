
import { useEffect } from "react"
import { useMic } from "../hooks/useMic";
export const VoiceRoom = () => {
    const {error, requestMic, status, stopMic} = useMic();

    return (
        <div>
        {status === "idle" &&
            <button onClick={requestMic}>🎤 Enable Mic</button>}

        {status === "loading" &&
            <p>Waiting for permission…</p>}

        {status === "granted" && <>
            <p>✅ Mic is live!</p>
            <button onClick={stopMic}>Stop</button>
        </>}

        {status === "denied" && <>
            <p>❌ Blocked: {error}</p>
            <button onClick={requestMic}>Try again</button>
        </>}
        </div>
    );
}
