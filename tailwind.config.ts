import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'gradient-linear' : 'linear-gradient(to right,#F3D8E1 4.72%, #919FCC 27.52%, #1969D0 50.32%, #0F61E6 77.12%);'
            }),
            strokeWidth: {
                '1': '1px',
                '2': '2px',
                '2.5': '2.5px',
                '3': '3px',
            },
            fontFamily: {
                body: ["Inter", "Sans Serif"],
                title: ["Inter", "Sans Serif"]
            },
            fontSize: {
                body: [
                    "1rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                h1: [
                    "3.5rem",
                    {
                        lineHeight: "3.75rem"
                    }
                ],
                h2: [
                    "2.25rem",
                    {
                        lineHeight: "2.625rem"
                    }
                ],
                h3: [
                    "1.875rem",
                    {
                        lineHeight: "2.25rem"
                    }
                ],
                h4: [
                    "1.5rem",
                    {
                        lineHeight: "2rem"
                    }
                ],
                h5: [
                    "1.25rem",
                    {
                        lineHeight: "1.75rem"
                    }
                ],
                h6: [
                    "1.125rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                mini: [
                    "0.75rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ]
            },
            colors: {
                black: {
                    DEFAULT: "#000000",
                    50: "#E6E6E6",
                    100: "#CCCCCC",
                    200: "#999999",
                    300: "#666666",
                    400: "#333333",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000"
                },
                gray: {
                    DEFAULT: '#8C8C8C',
                    50: '#F3F3F3',
                    100: '#E8E8E8',
                    200: '#D1D1D1',
                    300: '#BABABA',
                    400: '#A3A3A3',
                    500: '#8C8C8C',
                    600: '#747474',
                    700: '#5D5D5D',
                    800: '#464646',
                    900: '#303030',
                    950: '#252525'
                },
                white: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFC",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FAFAFA",
                    400: "#FAFAFA",
                    500: "#F7F7F7",
                    600: "#C7C7C7",
                    700: "#949494",
                    800: "#636363",
                    900: "#303030"
                },
                primary: {
                    50: "#F0EBFF",
                    100: "#DDD1FF",
                    200: "#BEA8FF",
                    300: "#9C7AFF",
                    400: "#794DFF",
                    500: "#5A21FF",
                    600: "#3900E6",
                    700: "#2B00AD",
                    800: "#1D0075",
                    900: "#0E0038",
                    950: "#08001F"
                },
                secondary: {
                    50: "#E6E6E6",
                    100: "#CCCCCC",
                    200: "#999999",
                    300: "#434343",
                    400: "#0F61E6",
                    500: "#010101",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                    950: "#000000"
                },
                badge: "#F1F5F9",
                badgeText: "#475569"
            }
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-hero-patterns")
    ],
};
export default config;
