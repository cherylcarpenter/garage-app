import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const Lighttheme: ThemeDefinition = {
  dark: false,
  variables: {
    $brand_blue: "#5f8ee4",
    $brand_black: "#19191a",
    $brand_red: "#e4655f",
    $brand_ltgray: "#e5e6e5",
    $brand_white: "#ffffff",
  },
  colors: {
    primary: "#5f8ee4",
    info: "#03c9d7",
    success: "#05b187",
    accent: "#e5e6e5",
    warning: "#e4655f",
    error: "#fc4b6c",
    secondary: "#e4655f",
  },
};
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: Lighttheme,
      },
    },
    defaults: {
      global: {
        ripple: false,
      },
      VSheet: {
        elevation: 4,
      },
      styles: { configFile: "src/settings.scss" },
      variables: {
        $brand_blue: "#5f8ee4",
        $brand_black: "#19191a",
        $brand_red: "#e4655f",
        $brand_ltgray: "#e5e6e5",
        $brand_white: "#ffffff",
      },
      colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        primary: "#5f8ee4",
        "primary-darken-1": "#3700B3",
        secondary: "#03DAC6",
        "secondary-darken-1": "#018786",
        error: "#B00020",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
