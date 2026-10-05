import AuroraBackground from "./AuroraBackground";

type Props = {
  grid?: boolean;
};

const SectionBackground = ({ grid = true }: Props) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AuroraBackground />

      {grid && (
        <div
          className="
            absolute
            inset-0
            opacity-40
            bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
            bg-size-[60px_60px]
          "
        />
      )}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/70" />
    </div>
  );
};

export default SectionBackground;
