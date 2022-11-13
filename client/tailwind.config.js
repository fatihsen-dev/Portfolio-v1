/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkv1: "#111111",
        darkv2: "#0D0D0D",
        darkv3: "#151515",
        darkv4: "#151515",
        darkv5: "#0F0F0F",
        lightv1: "#FFFFFF",
        lightv2: "#f8f8f8",
        lightv3: "#f5f5f5",
        lightv4: "#eeeeee",
        lightv5: "#dddddd",

        //lang icon colors
        htmlColor: "#e34c26",
        cssColor: "#2965f1",
        jsColor: "#F0DB4F",
        githubColor: "#1b1f23",
        gitColor: "#F1502F",
        stackColor: "#F48024",
        bootstrapColor: "#563d7c",
        sassColor: "#CD6799",
        tailwindColor: "#38bdf8",
        nodejsColor: "#689f63",
        mongodbColor: "#4DB33D",
        reactjsColor: "#61DBFB",
      },
    },
  },
  plugins: [],
};
