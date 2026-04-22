/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50:  'hsl(270, 100%, 97%)',
          100: 'hsl(270, 100%, 92%)',
          200: 'hsl(270, 100%, 85%)',
          300: 'hsl(270, 90%,  75%)',
          400: 'hsl(270, 85%,  65%)',
          500: 'hsl(270, 80%,  55%)',
          600: 'hsl(270, 75%,  47%)',
          700: 'hsl(270, 70%,  38%)',
          800: 'hsl(270, 65%,  30%)',
          900: 'hsl(270, 60%,  20%)',
        },
        accent: {
          pink: 'hsl(var(--accent-pink))',
          blue: 'hsl(var(--accent-blue))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          elevated: 'hsl(var(--surface-elevated))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        danger: 'hsl(var(--danger))',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, hsl(270,80%,10%) 0%, hsl(240,60%,8%) 50%, hsl(300,60%,8%) 100%)',
        'gradient-card': 'linear-gradient(135deg, hsl(270,30%,12%) 0%, hsl(250,30%,10%) 100%)',
        'gradient-primary': 'linear-gradient(135deg, hsl(270,80%,55%) 0%, hsl(290,80%,55%) 100%)',
        'gradient-accent': 'linear-gradient(135deg, hsl(var(--accent-pink)) 0%, hsl(var(--accent-blue)) 100%)',
        'gradient-text': 'linear-gradient(135deg, hsl(270,90%,75%) 0%, hsl(320,90%,70%) 50%, hsl(220,90%,70%) 100%)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(270,80%,55%,0.3), 0 0 40px hsl(270,80%,55%,0.1)' },
          '50%': { boxShadow: '0 0 30px hsl(270,80%,55%,0.5), 0 0 60px hsl(270,80%,55%,0.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      boxShadow: {
        'glow-sm': '0 0 10px hsl(270,80%,55%,0.3)',
        'glow': '0 0 20px hsl(270,80%,55%,0.4), 0 0 40px hsl(270,80%,55%,0.15)',
        'glow-lg': '0 0 40px hsl(270,80%,55%,0.5), 0 0 80px hsl(270,80%,55%,0.2)',
        'glow-pink': '0 0 20px hsl(320,90%,65%,0.4), 0 0 40px hsl(320,90%,65%,0.15)',
        'glow-blue': '0 0 20px hsl(220,90%,65%,0.4), 0 0 40px hsl(220,90%,65%,0.15)',
        'glass': '0 8px 32px hsl(270,30%,5%,0.5)',
        'card': '0 4px 24px hsl(270,30%,5%,0.4), inset 0 1px 0 hsl(270,50%,80%,0.05)',
      },
    },
  },
  plugins: [],
}
