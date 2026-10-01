import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3efe6",
        paperDark: "#e8e0cf",
        ink: "#171b18",
        muted: "#66685f",
        route: "#a91f32",
        routeDark: "#791523",
        olive: "#73745c",
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)"],
        sans: ["var(--font-manrope)"],
        mono: ["var(--font-ibm-mono)"],
      },
      boxShadow: {
        ticket: "0 18px 60px rgba(23,27,24,.11)",
      },
    },
  },
  plugins: [],
} satisfies Config;
