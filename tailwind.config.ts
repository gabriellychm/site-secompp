import type { Config } from "tailwindcss";

const config: Config = {
  // This 'content' array tells Tailwind where to look for class names.
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // You can add other theme customizations here if you want.
    },
  },
  plugins: [],
};
export default config;
