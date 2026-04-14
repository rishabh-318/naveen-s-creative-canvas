import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSound } from "@/context/SoundContext";

type Props = {
  src: string;
  volume?: number;
  loop?: boolean;
};

const SoundPlayer = ({ src, volume = 0.02, loop = false }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { enabled, enableSound, disableSound } = useSound();

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
    if (enabled) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [enabled, volume]);

  return (
    <>
      <audio ref={audioRef} loop={loop} src={src} />
      {createPortal(
        <Button
          variant="ghost"
          size="icon"
          onClick={enabled ? disableSound : enableSound}
          className="fixed bottom-6 right-6 z-50 bg-background/80 backdrop-blur border-2"
        >
          {enabled ? <Pause /> : <Play />}
        </Button>,
        document.body  // renders directly on body, outside any parent constraints
      )}
    </>
  );
};

export default SoundPlayer;