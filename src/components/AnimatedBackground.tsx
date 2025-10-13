"use client";

import {ReactNode, useEffect, useMemo, useState} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadExternalGrabInteraction } from "@tsparticles/interaction-external-grab";
import { loadExternalBubbleInteraction } from "@tsparticles/interaction-external-bubble";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";

export default function AnimatedBackground({children}: { children: ReactNode}) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadExternalGrabInteraction(engine);
      await loadExternalBubbleInteraction(engine);
      await loadExternalPushInteraction(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 100,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 250,
            links: {
              opacity: 0.8,
              color: "#8B5CF6",
            },
          },
          bubble: {
            distance: 300,
            size: 5,
            duration: 2,
            opacity: 1,
          },
        },
      },
      particles: {
        color: {
          value: ["#3B82F6", "#8B5CF6", "#EC4899"],
        },
        links: {
          color: "#8B5CF6",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) {
    return null;
  }

  return (
    <div className=" overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute inset-0 pointer-events-auto">
        <Particles id="tsparticles" options={options} />
      </div>
      <div className="relative pointer-events-auto">{children}</div>
    </div>
  );
}
