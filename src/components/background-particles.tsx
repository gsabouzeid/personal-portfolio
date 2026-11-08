import { type Engine, type ISourceOptions } from "@tsparticles/engine";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { memo } from "react";

const particlesInit = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

const BackgroundParticles = () => {
  const options: ISourceOptions = {
    key: "absorbers",
    name: "Absorbers",
    particles: {
      number: {
        value: 300,
      },
      collisions: {
        enable: true,
      },
      paint: {
        fill: {
          color: {
            value: "#f0f0f0",
          },
          enable: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
      },
      size: {
        value: {
          min: 1,
          max: 2,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "top",
        straight: true,
        warp: true,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 10,
        },
      },
    },
    absorbers: {
      draggable: true,
      size: {
        value: {
          min: 5,
          max: 10,
        },
        limit: 10,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
  };

  return (
    <div style={{ zIndex: -1, position: "absolute" }}>
      <ParticlesProvider init={particlesInit}>
        <Particles options={options} />
      </ParticlesProvider>
    </div>
  );
};

export default memo(BackgroundParticles);
