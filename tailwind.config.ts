import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [flowbite],
};

export default config;