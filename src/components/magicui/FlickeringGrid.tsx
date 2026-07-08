import { useEffect, useRef } from "react";

type FlickeringGridProps = {
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  width?: number;
  height?: number;
  className?: string;
};

export default function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  color = "#00F5C3",
  maxOpacity = 0.25,
  flickerChance = 0.08,
  width = window.innerWidth,
  height = window.innerHeight,
  className = "",
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < width; x += squareSize + gridGap) {
        for (let y = 0; y < height; y += squareSize + gridGap) {
          const opacity =
            Math.random() < flickerChance
              ? Math.random() * maxOpacity
              : maxOpacity * 0.08;

          ctx.fillStyle = `${color}${Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")}`;

          ctx.fillRect(x, y, squareSize, squareSize);
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, [
    squareSize,
    gridGap,
    color,
    maxOpacity,
    flickerChance,
    width,
    height,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
}