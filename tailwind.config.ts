import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      jred: '#d70050',
      jhred: '#AD003F',
      jcream: '#ebecf0',
      jbgGrey: '#333333 ',
      jGrey: '#1a1a1a ',
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [    
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark"],
  },
};


export default config;
