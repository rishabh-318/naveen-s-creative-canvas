import { createContext, useContext, useEffect, useState } from "react";

type SoundContextType = {
  enabled: boolean;
  enableSound: () => void;
  disableSound: () => void;
};

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [enabled, setEnabled] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sound-enabled");
    if (stored !== null) {
      setEnabled(stored === "true");
    }
    setInitialized(true);
  }, []);

  const enableSound = () => {
    localStorage.setItem("sound-enabled", "true");
    setEnabled(true);
  };

  const disableSound = () => {
    localStorage.setItem("sound-enabled", "false");
    setEnabled(e => !e);
  };

  if (!initialized) return null;

  return (
    <SoundContext.Provider value={{ enabled, enableSound, disableSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used inside SoundProvider");
  return ctx;
};
