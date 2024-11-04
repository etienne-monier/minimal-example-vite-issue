/**
 * THIS IS A VITE CONFIGURATION FOR LIBRARY BUILD
 */

// Plugins
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";
import dts from "vite-plugin-dts";

// Utilities
import { defineConfig } from "vite";

import path from "path";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  mode: "development",
  plugins: [
    Vue({
      // template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),
    dts(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/lib",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "library",
      fileName: (format) => `index.${format}.js`,
    },
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ["vue", "vuetify"],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: "Vue",
    //       vuetify: "Vuetify",
    //     },
    //   },
    // },
  },
});
