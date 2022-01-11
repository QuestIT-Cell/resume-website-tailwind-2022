module.exports = {
    content: ["./dist/*.html"],
    theme: {
        extend: {
            screens: {
                lg: { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                // Socials Grid
                sc: { max: "1079px" },
                // => @media (max-width: 770px) { ... }

                sm: { max: "639px" },
                // => @media (max-width: 639px) { ... }

                xs: { max: "391px" },
                // => @media (max-width: 391px) { ... }
            },
        },
    },
    plugins: [],
};
