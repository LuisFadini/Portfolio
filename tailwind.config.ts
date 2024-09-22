import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        text: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d",
        },
        background: {
          50: "#f0f2f5",
          100: "#e0e6eb",
          200: "#c2ccd6",
          300: "#a3b3c2",
          400: "#8599ad",
          500: "#667f99",
          600: "#52667a",
          700: "#3d4c5c",
          800: "#29333d",
          900: "#14191f",
          950: "#0a0d0f",
        },
        primary: {
          50: "#e8f4fd",
          100: "#d1e9fa",
          200: "#a2d3f6",
          300: "#74bdf1",
          400: "#45a7ed",
          500: "#1791e8",
          600: "#1274ba",
          700: "#0e578b",
          800: "#093a5d",
          900: "#051d2e",
          950: "#020e17",
        },
        secondary: {
          50: "#eaf4fb",
          100: "#d5e9f6",
          200: "#aad3ee",
          300: "#80bde5",
          400: "#56a6dc",
          500: "#2b90d4",
          600: "#2373a9",
          700: "#1a577f",
          800: "#113a55",
          900: "#091d2a",
          950: "#040e15",
        },
        accent: {
          50: "#e7f5fe",
          100: "#ceeafd",
          200: "#9ed5fa",
          300: "#6dc0f8",
          400: "#3cacf6",
          500: "#0b97f4",
          600: "#0979c3",
          700: "#075a92",
          800: "#053c61",
          900: "#021e31",
          950: "#010f18",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({nocompatible: true}),],
};
export default config;

