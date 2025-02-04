/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import LandingPage from "../../components/game-components/Sims/LandingPage";
import { SocketIoManager } from "../../components/game-components/Sims/SocketIoManager";
import { Suspense } from "react";
import Loader from "../../components/minor-components/Loader";
import { Toaster } from "sonner";
import ExitButton from "../../components/minor-components/ExitButton";
import "../../styles/Simulator.css";

function Simulator() {
  return (
    <div className="simulator-container">
      <Suspense fallback={<Loader />}>
        <SocketIoManager />
        <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <LandingPage />
        </Canvas>
        <ExitButton />
      </Suspense>
      <Toaster position="top-center" richColors expand={false} />
    </div>
  );
}

export default Simulator;
