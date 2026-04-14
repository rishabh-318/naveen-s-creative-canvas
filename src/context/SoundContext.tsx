import { createContext, useContext, useEffect, useState } from "react";

type SoundContextType = {
  enabled: boolean;
  asked: boolean;
  enableSound: () => void;
  disableSound: () => void;
};

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [enabled, setEnabled] = useState(false);
  const [asked, setAsked] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Runs once on mount only — [] dep, not [enabled]
    const stored = localStorage.getItem("sound-enabled");
    if (stored !== null) {
      setEnabled(stored === "true"); // correctly restores both true and false
      setAsked(true);               // skip modal if they've chosen before
    }
    setInitialized(true);
  }, []); // fixed: was [enabled], causing infinite re-runs

  const enableSound = () => {
    localStorage.setItem("sound-enabled", "true");
    setEnabled(true);
    setAsked(true);
  };

  const disableSound = () => {
    localStorage.setItem("sound-enabled", "false");
    setEnabled(false);
    setAsked(true);
  };

  if (!initialized) return null;

  return (
    <SoundContext.Provider value={{ enabled, asked, enableSound, disableSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used inside SoundProvider");
  return ctx;
};