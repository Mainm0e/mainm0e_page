import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        /* primary,secondary 60%  */
        /* accent, neutral 30%*/
        /* base-100 10% */
        "primary": "#FFFFFF",
        "secondary": "#CECECE",
        "accent": "#A6A6A8",
        "neutral": "#272635",
        "base-100": "0075F2",
        
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fccf9c",
        
"secondary": "#2c9ba3",
        
"accent": "#bc5c20",
        
"neutral": "#1a1424",
        
"base-100": "#fcfcfd",
        
"info": "#59a4c9",
        
"success": "#18c3a4",
        
"warning": "#c56e11",
        
"error": "#fc2c6a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
