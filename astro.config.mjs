import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image(), astroImageTools],
  // experimental: {
  //   assets: true
  // }
});
