import {defineConfig} from "vite"

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
})

// NOTE: copy unhashed assets and map files into dist after build
