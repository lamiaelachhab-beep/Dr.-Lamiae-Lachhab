module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#83cfd2', // Brighter Turquoise
                    DEFAULT: '#83cfd2',
                    dark: '#c0eaec',
                },
                secondary: {
                    light: '#1c5e7cff',
                    DEFAULT: '#267ca3ff', // Deep Navy
                    dark: '#5394afff',
                },
                          background: {
                    DEFAULT: '#dbebeaff', // 
                },
            },
            fontFamily: {
                sans: ['Montserrat', 'Inter', 'sans-serif'],
                arabic: ['Tajawal', 'Noto Sans Arabic', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite',
                'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%, 100%': { opacity: 0.8, filter: 'brightness(1)' },
                    '50%': { opacity: 1, filter: 'brightness(1.5)' },
                },
                'neural-pulse': {
                    '0%': { transform: 'scale(1)', opacity: 0.5 },
                    '50%': { transform: 'scale(1.05)', opacity: 0.8 },
                    '100%': { transform: 'scale(1)', opacity: 0.5 },
                }
            }
        },
    },
    plugins: [],
}
