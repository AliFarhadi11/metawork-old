/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#5D5FEF",
                secondary: "#00f6ff",
                dark: "#000000",
                light: "#6F6F6F",
                hero: "#353658",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                manrope: ["Manrope", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};
