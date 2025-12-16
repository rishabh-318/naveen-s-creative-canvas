import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SoundProvider } from "./context/SoundContext.tsx";
import SoundPermissionModal from "./components/SoundPermissionModal.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <SoundProvider>
      <SoundPermissionModal />
      <App />
    </SoundProvider>
  </>
);
