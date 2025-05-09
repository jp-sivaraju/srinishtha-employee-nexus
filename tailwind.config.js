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
          DEFAULT: '#c792ea', // Night Owl purple
          foreground: '#FFFFFF',
          100: '#eee7fc',
          200: '#dfd1f9',
          300: '#c7acf5',
          400: '#c792ea', // Night Owl purple
          500: '#9b71c7',
          600: '#7d59a6',
          700: '#614787',
          800: '#483566',
          900: '#2c1e44'
        },
        secondary: {
          DEFAULT: '#80cbc4', // Night Owl teal
          foreground: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#011627', // Night Owl background
          lighter: '#152b3d',
          light: '#1d3b53',
        },
        accent: {
          DEFAULT: '#f78c6c', // Night Owl orange
          yellow: '#ffd700', // Night Owl yellow
          blue: '#82aaff', // Night Owl blue
          aqua: '#7fdbca', // Night Owl aqua
        },
        neutral: '#8E9196',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
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
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
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
        fira: ['Fira Code', 'monospace'], // Developer-friendly font
      },
      gradients: {
        // Add some predefined gradients that can be referenced in your CSS
        'primary': 'linear-gradient(135deg, #c792ea 0%, #7d59a6 100%)',
        'secondary': 'linear-gradient(135deg, #82aaff 0%, #5079cc 100%)',
        'sunset': 'linear-gradient(135deg, #f78c6c 0%, #e05252 100%)',
        'blue-purple': 'linear-gradient(90deg, #82aaff 0%, #c792ea 100%)',
        'night-owl': 'linear-gradient(to right, #011627 0%, #1d3b53 100%)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #c792ea 0%, #7d59a6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #82aaff 0%, #5079cc 100%)',
        'gradient-blue-purple': 'linear-gradient(90deg, #82aaff 0%, #c792ea 100%)',
        'gradient-night-owl': 'linear-gradient(to right, #011627 0%, #1d3b53 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #f78c6c 0%, #e05252 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(199, 146, 234, 0.5)',
        'glow-blue': '0 0 15px rgba(130, 170, 255, 0.5)',
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
