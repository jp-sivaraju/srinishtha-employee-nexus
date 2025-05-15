/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#6B48FF', // Rich modern purple
          foreground: '#FFFFFF',
          100: '#F3F0FF',
          200: '#E4DCFF',
          300: '#C5B3FF',
          400: '#A78BFA', // Lighter purple for status/indicators
          500: '#8B5CF6',
          600: '#6B48FF', // Main purple for active elements
          700: '#5B34EB', 
          800: '#4A29CC',
          900: '#3C1F9E'
        },
        secondary: {
          DEFAULT: '#1C2526', // Deep black for contrast
          foreground: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#1C2526', // Deep black background
          lighter: '#2A3132',
          light: '#364142',
        },
        accent: {
          DEFAULT: '#A78BFA', // Lighter purple accent
          light: '#C5B3FF', 
          dark: '#6B48FF',
        },
        neutral: {
          DEFAULT: '#B0B0B0', // Soft gray for subtext
          light: '#D1D1D1',
          dark: '#707070',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: '#A78BFA',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: '#FFFFFF', // White sidebar
          foreground: '#1C2526',
          primary: '#6B48FF',
          'primary-foreground': '#FFFFFF',
          accent: '#F3F0FF',
          'accent-foreground': '#6B48FF',
          border: '#E4DCFF',
          ring: '#8B5CF6'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'Inter', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
      },
      gradients: {
        'primary': 'linear-gradient(135deg, #6B48FF 0%, #A78BFA 100%)',
        'secondary': 'linear-gradient(135deg, #A78BFA 0%, #C5B3FF 100%)',
        'dark': 'linear-gradient(90deg, #1C2526 0%, #2A3132 100%)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6B48FF 0%, #A78BFA 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #A78BFA 0%, #C5B3FF 100%)',
        'gradient-dark': 'linear-gradient(90deg, #1C2526 0%, #2A3132 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(107, 72, 255, 0.5)',
        'glow-purple': '0 0 15px rgba(167, 139, 250, 0.5)',
        'glow-white': '0 0 15px rgba(255, 255, 255, 0.3)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        'float': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(8px)',
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
