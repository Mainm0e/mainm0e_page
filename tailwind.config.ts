import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        /*
        60%
        Danube
        #7AB1D6
        Foggy Gray
        #C9CAB0

        30%
        Black Marlin
        #392A18
        Potters Clay
        #836237
          */
        primary: "#7C808F",
        /* opacity bg */
        "primary-60": "#7C808F0",
        secondary: "#F1F1F4",
        accent: "#F1F1F4",
        "accent-30": "#F1F1F430",
        neutral: "#252C4A",
        "base-100": "F1F1F4",
        // * text
        "text-primary": "#FFF",
        "text-secondary": "#000",
        "text-label": "#000",
        "text-hover": "#FFF",
        "text-neutral": "#000",
        // * btn
        "btn-primary": "#252C4A",
        "btn-hover": "#7C808F",
      },
      /* animations */
        keyframes: {
          shake: {
            '0%, 100%': { transform: 'translateX(0)' },
            '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-1px)' },
            '20%, 40%, 60%, 80%': { transform: 'translateX(1px)' },
          }
        },
        animation: {
          shake: 'shake 0.7s ease-in-out ',
        },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570df8",
          "primary-focus": "#4506cb",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
