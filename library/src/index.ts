/**
 * index.ts
 *
 * Distribute vue application
 */

import type { App as AppType } from "vue";
import { registerPlugins } from "@/plugins/index";

// Coponents
import App from "./App.vue";

const plugin = {
  install(app: AppType, options: any[]) {
    registerPlugins(app);
    app.component("ProgqiClient", App);
  },
};

export { plugin, App as Client };
