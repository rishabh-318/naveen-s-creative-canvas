import { useEffect, useRef, useState } from "react";

export default function SoundPlayer({
  src = "/intro-pirates.mp3",
  autoPlay = true,
  volume = 0.2,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audioRef.current = audio;

    if (autoPlay) audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src, autoPlay, volume]);

  // Play / Pause Handler
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      style={{
        height: "screen",
        position: "fixed",

        right: "20px",
        zIndex: 9999,
        background: "#ffffff",

        padding: "10px 10px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      className="bottom-5 rounded-full"
    >
      <button
        onClick={togglePlay}
        style={{
          border: "none",
          background: "black",
          color: "white",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        {isPlaying ? "⏸" : "▶️"}
      </button>
      <span
        style={{ fontSize: "14px", fontWeight: 500 }}
        className="sm:block hidden"
      >
        {isPlaying ? "Playing…" : "Paused"}
      </span>
    </div>
  );
}
