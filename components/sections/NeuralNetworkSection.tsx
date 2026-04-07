"use client";
import dynamic from "next/dynamic";

const NeuralNetwork = dynamic(() => import("@/components/three/NeuralNetwork"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />,
});

export default function NeuralNetworkSection() {
  return (
    <section className="relative h-[500px] bg-black overflow-hidden">
      {/* Gradient fades */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <NeuralNetwork />
      </div>

      {/* Center text overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <div className="text-xs tracking-[0.3em] text-[#00FF41]/40 mb-3">// AI INFRASTRUCTURE</div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-widest neon-text mb-4">
          NEURAL INTELLIGENCE
        </h2>
        <p className="text-[#00FF41]/50 text-sm max-w-md">
          Every node. Every connection. Every decision — engineered with precision.
        </p>
      </div>
    </section>
  );
}
