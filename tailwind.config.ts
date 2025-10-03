// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|dropdown|form|input|modal|navbar|select|spinner|user|ripple|menu|divider|popover|listbox|scroll-shadow|avatar).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
  "themes": {
    "light": {
      "colors": {
        "default": {
          "50": "#f1f1f1",
          "100": "#dddddd",
          "200": "#cacaca",
          "300": "#b6b6b6",
          "400": "#a3a3a3",
          "500": "#8f8f8f",
          "600": "#767676",
          "700": "#5d5d5d",
          "800": "#444444",
          "900": "#2b2b2b",
          "foreground": "#000",
          "DEFAULT": "#8f8f8f"
        },
        "primary": {
          "50": "#f5f8ea",
          "100": "#e7eece",
          "200": "#d9e4b1",
          "300": "#cbdb94",
          "400": "#bdd177",
          "500": "#afc75a",
          "600": "#90a44a",
          "700": "#72813b",
          "800": "#535f2b",
          "900": "#353c1b",
          "foreground": "#000",
          "DEFAULT": "#afc75a"
        },
        "secondary": {
          "50": "#e2f7fd",
          "100": "#baecfb",
          "200": "#91e2f8",
          "300": "#69d7f6",
          "400": "#40ccf3",
          "500": "#18c1f1",
          "600": "#149fc7",
          "700": "#107d9d",
          "800": "#0b5c72",
          "900": "#073a48",
          "foreground": "#000",
          "DEFAULT": "#18c1f1"
        },
        "success": {
          "50": "#eff8f0",
          "100": "#d9eeda",
          "200": "#c3e4c5",
          "300": "#addbaf",
          "400": "#97d19a",
          "500": "#81c784",
          "600": "#6aa46d",
          "700": "#548156",
          "800": "#3d5f3f",
          "900": "#273c28",
          "foreground": "#000",
          "DEFAULT": "#81c784"
        },
        "warning": {
          "50": "#fff6e9",
          "100": "#ffe9ca",
          "200": "#ffddaa",
          "300": "#ffd08b",
          "400": "#ffc46c",
          "500": "#ffb74d",
          "600": "#d29740",
          "700": "#a67732",
          "800": "#795725",
          "900": "#4d3717",
          "foreground": "#000",
          "DEFAULT": "#ffb74d"
        },
        "danger": {
          "50": "#fceeee",
          "100": "#f7d5d5",
          "200": "#f3bdbd",
          "300": "#eea4a4",
          "400": "#ea8c8c",
          "500": "#e57373",
          "600": "#bd5f5f",
          "700": "#954b4b",
          "800": "#6d3737",
          "900": "#452323",
          "foreground": "#000",
          "DEFAULT": "#e57373"
        },
        "background": "#ffffff",
        "foreground": "#4a4a4a",
        "content1": {
          "DEFAULT": "#f0f0f0",
          "foreground": "#000"
        },
        "content2": {
          "DEFAULT": "#e6e6e6",
          "foreground": "#000"
        },
        "content3": {
          "DEFAULT": "#dcdcdc",
          "foreground": "#000"
        },
        "content4": {
          "DEFAULT": "#d2d2d2",
          "foreground": "#000"
        },
        "focus": "#db924b",
        "overlay": "#000000"
      }
    },
    "dark": {
      "colors": {
        "default": {
          "50": "#1d1d1d",
          "100": "#393939",
          "200": "#565656",
          "300": "#727272",
          "400": "#8f8f8f",
          "500": "#a5a5a5",
          "600": "#bcbcbc",
          "700": "#d2d2d2",
          "800": "#e9e9e9",
          "900": "#ffffff",
          "foreground": "#000",
          "DEFAULT": "#8f8f8f"
        },
        "primary": {
          "50": "#353c1b",
          "100": "#535f2b",
          "200": "#72813b",
          "300": "#90a44a",
          "400": "#afc75a",
          "500": "#bdd177",
          "600": "#cbdb94",
          "700": "#d9e4b1",
          "800": "#e7eece",
          "900": "#f5f8ea",
          "foreground": "#000",
          "DEFAULT": "#afc75a"
        },
        "secondary": {
          "50": "#073a48",
          "100": "#0b5c72",
          "200": "#107d9d",
          "300": "#149fc7",
          "400": "#18c1f1",
          "500": "#40ccf3",
          "600": "#69d7f6",
          "700": "#91e2f8",
          "800": "#baecfb",
          "900": "#e2f7fd",
          "foreground": "#000",
          "DEFAULT": "#18c1f1"
        },
        "success": {
          "50": "#112b12",
          "100": "#1b431d",
          "200": "#245c27",
          "300": "#2e7532",
          "400": "#388e3c",
          "500": "#5ba25e",
          "600": "#7eb680",
          "700": "#a0c9a2",
          "800": "#c3ddc5",
          "900": "#e6f1e7",
          "foreground": "#000",
          "DEFAULT": "#388e3c"
        },
        "warning": {
          "50": "#4a2500",
          "100": "#743b00",
          "200": "#9f5100",
          "300": "#ca6600",
          "400": "#f57c00",
          "500": "#f7932d",
          "600": "#f9aa59",
          "700": "#fac186",
          "800": "#fcd8b3",
          "900": "#feefdf",
          "foreground": "#000",
          "DEFAULT": "#f57c00"
        },
        "danger": {
          "50": "#3f0e0e",
          "100": "#641616",
          "200": "#891f1f",
          "300": "#ae2727",
          "400": "#d32f2f",
          "500": "#db5353",
          "600": "#e27878",
          "700": "#ea9c9c",
          "800": "#f2c1c1",
          "900": "#fae5e5",
          "foreground": "#fff",
          "DEFAULT": "#d32f2f"
        },
        "background": "#000000",
        "foreground": "#b0b0b0",
        "content1": {
          "DEFAULT": "#2a2a2a",
          "foreground": "#fff"
        },
        "content2": {
          "DEFAULT": "#3b3b3b",
          "foreground": "#fff"
        },
        "content3": {
          "DEFAULT": "#4c4c4c",
          "foreground": "#fff"
        },
        "content4": {
          "DEFAULT": "#5d5d5d",
          "foreground": "#fff"
        },
        "focus": "#000000",
        "overlay": "#ffffff"
      }
    }
  },
  "layout": {
    "disabledOpacity": "0.5"
  }
})],
};