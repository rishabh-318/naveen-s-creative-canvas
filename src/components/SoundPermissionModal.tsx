import { Button } from "@/components/ui/button";
import { useSound } from "@/context/SoundContext";

const SoundPermissionModal = () => {
  const { enableSound, disableSound } = useSound();

  if (localStorage.getItem("sound-enabled") !== null) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card p-6 rounded-xl max-w-sm text-center space-y-4">
        <h2 className="text-xl font-bold">You’re About to Miss Something</h2>
        <p className="text-muted-foreground">
          This site uses sound to enhance the experience. You can turn it off
          anytime.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={enableSound} className="bg-accent">
            Turn Sound On
          </Button>
          <Button variant="outline" onClick={disableSound}>
            Keep It Silent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SoundPermissionModal;
