import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compressor({ gzip: true, brotli: false })]
});