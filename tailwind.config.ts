import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          glass: "hsl(var(--card-glass))",
        },
        // Plasma Colors
        plasma: {
          blue: "hsl(var(--plasma-blue))",
          'blue-glow': "hsl(var(--plasma-blue-glow))",
          cyan: "hsl(var(--plasma-cyan))",
          purple: "hsl(var(--plasma-purple))",
          'purple-deep': "hsl(var(--plasma-purple-deep))",
          violet: "hsl(var(--plasma-violet))",
          pink: "hsl(var(--plasma-pink))",
          rose: "hsl(var(--plasma-rose))",
          magenta: "hsl(var(--plasma-magenta))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-plasma-primary': 'var(--gradient-plasma-primary)',
        'gradient-plasma-hero': 'var(--gradient-plasma-hero)',
        'gradient-plasma-card': 'var(--gradient-plasma-card)',
        'gradient-plasma-button': 'var(--gradient-plasma-button)',
        'gradient-plasma-glow': 'var(--gradient-plasma-glow)',
      },
      boxShadow: {
        'plasma-sm': 'var(--shadow-plasma-sm)',
        'plasma-md': 'var(--shadow-plasma-md)',
        'plasma-lg': 'var(--shadow-plasma-lg)',
        'plasma-glow': 'var(--shadow-plasma-glow)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
        plasma: ["Orbitron", "sans-serif"],
        mori: ["DM Sans", "sans-serif"],
      },

      theme: {
        extend: {
          maxWidth: {
            "90": "90%", // bikin class max-w-90
          },
        },
      },
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        // "accordion-down": "accordion-down 0.2s ease-out",
        // "accordion-up": "accordion-up 0.2s ease-out",
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
