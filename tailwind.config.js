module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f3f4f6", 200: "#e5e7eb", 600: "#6b7280", 900: "#111827" },
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d1d5db", 700: "#4b5563", 800: "#374151", "800_01": "#39404f" },
        teal: { 50: "#d1fae5", 300: "#34d399", 800: "#008638" },
        green: { A200: "#6ee7b7" },
        red: { 200: "#fca5a5" },
        deep_orange: { 50: "#fee2e2" },
      },
      boxShadow: {
        xs: "0px 2px  4px -1px #0000000c",
        sm: "0px 1px  6px 0px #00000019",
        md: "0px 1px  2px 0px #0000000c",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
