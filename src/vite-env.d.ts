/// <reference types="vite/client" />

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

/// <reference types="vite/client" />

declare module "*.glb";
declare module "*.png";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})