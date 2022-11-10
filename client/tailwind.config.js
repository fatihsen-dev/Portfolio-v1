/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkv1: "#111111",
        darkv2: "#0D0D0D",
        darkv3: "#222222",
        darkv4: "#151515",
        darkv5: "#0F0F0F",
        light: "#F4F4F4",
        grayText: "#BBBBBB",

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
