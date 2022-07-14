module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",
  theme: {
    extend: {}
  },
  darkMode: "class",
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("@vechaiui/core")],
  purge: {
    // Filenames to scan for classes

    content: [
      "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html"
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    }
  }
};
