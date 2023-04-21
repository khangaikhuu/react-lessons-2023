import { Canvas } from "@react-three/fiber";
import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      ></Canvas>
    </div>
  );
}
