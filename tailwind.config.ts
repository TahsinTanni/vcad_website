import type { Config } from "tailwindcss";

// Design tokens below are taken from the VCAD "Academic Noir" design system
// (see DESIGN.md exported alongside the Figma frames). Values were cross-checked
// by pixel-sampling the exported page screenshots (surface -> #111318,
// surface-container-lowest -> #0c0e13, surface-container -> #1d2025, etc. all
// matched exactly), so this palette -- not the shorter brand cheat-sheet in the
// brief -- is what the frames actually render with. See README "Design tokens"
// note for the full reasoning.

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-primary-fixed": "#11193c",
        "on-error": "#690005",
        surface: "#111318",
        "inverse-on-surface": "#2e3036",
        "outline-variant": "#46464e",
        "surface-container": "#1d2025",
        "on-primary": "#272e52",
        "primary-fixed-dim": "#bdc4f1",
        "surface-dim": "#111318",
        "surface-tint": "#bdc4f1",
        "on-tertiary-fixed-variant": "#005141",
        "primary-container": "#030a2e",
        background: "#111318",
        "on-secondary-fixed-variant": "#8d0052",
        "inverse-surface": "#e1e2e9",
        "tertiary-container": "#00110c",
        "secondary-container": "#d70180",
        "on-secondary": "#640038",
        "on-primary-fixed-variant": "#3d456a",
        "surface-container-lowest": "#0c0e13",
        "on-primary-container": "#7279a2",
        error: "#ffb4ab",
        "tertiary-fixed-dim": "#00e0b8",
        "on-tertiary-container": "#008b72",
        "on-tertiary": "#00382c",
        outline: "#909099",
        "on-surface-variant": "#c6c5cf",
        "on-background": "#e1e2e9",
        "on-secondary-fixed": "#3e0021",
        primary: "#bdc4f1",
        "error-container": "#93000a",
        "tertiary-fixed": "#11ffd2",
        "surface-container-highest": "#32353a",
        secondary: "#ffb0cc",
        tertiary: "#00e0b8",
        "surface-variant": "#32353a",
        "surface-container-low": "#191c21",
        "surface-container-high": "#272a2f",
        "secondary-fixed-dim": "#ffb0cc",
        "inverse-primary": "#555c83",
        "on-surface": "#e1e2e9",
        "primary-fixed": "#dde1ff",
        "on-secondary-container": "#fff1f3",
        "on-error-container": "#ffdad6",
        "secondary-fixed": "#ffd9e4",
        "on-tertiary-fixed": "#002019",
        "surface-bright": "#37393f",
      },
      borderRadius: {
        DEFAULT: "0.25rem", // 4px -- small chips
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        xxl: "80px",
        sm: "8px",
        lg: "24px",
        margin: "32px",
        md: "16px",
        xs: "4px",
        xl: "40px",
      },
      maxWidth: {
        frame: "1440px",
      },
      fontFamily: {
        body: ["var(--font-inter)"],
        lead: ["var(--font-inter)"],
        "default-primary": ["var(--font-inter)"],
        "page-title": ["var(--font-inter)"],
        "hero-display": ["var(--font-inter)"],
        "section-heading": ["var(--font-inter)"],
        "card-title": ["var(--font-inter)"],
        "page-title-mobile": ["var(--font-inter)"],
        "sub-heading": ["var(--font-inter)"],
        meta: ["var(--font-inter)"],
        "hero-display-mobile": ["var(--font-inter)"],
        micro: ["var(--font-inter)"],
      },
      fontSize: {
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        lead: ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        "default-primary": ["16px", { lineHeight: "1.5", fontWeight: "500" }],
        "page-title": [
          "60px",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "hero-display": [
          "68px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "section-heading": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "card-title": ["22px", { lineHeight: "1.4", fontWeight: "600" }],
        "page-title-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "sub-heading": ["36px", { lineHeight: "1.3", fontWeight: "600" }],
        meta: [
          "12px",
          { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" },
        ],
        "hero-display-mobile": ["42px", { lineHeight: "1.1", fontWeight: "700" }],
        micro: ["10px", { lineHeight: "1.2", fontWeight: "500" }],
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
