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

        /* Professional Health Service Palette */
        primary: {
          DEFAULT: "#1e40af",  /* Darker blue for better contrast */
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3066be",  /* True Blue */
          600: "#2563eb",  /* Hover state */
          700: "#1d4ed8",
          800: "#1e40af",  /* Darker primary for contrast */
          900: "#1e3a8a",
          foreground: "#ffffff",
        },
        columbia: {
          DEFAULT: "#cce6f4",  /* Columbia Blue - backgrounds, calm sections */
          50: "#f0f9ff",
          100: "#cce6f4",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
        },
        success: "#047857",  /* Success Green - even darker for better contrast */
        professional: "#374151",  /* Professional Gray - even darker for better contrast */
        white: "#ffffff",  /* Clean White - backgrounds, cleanliness */
        charcoal: "#1f2937",  /* Charcoal - headings, important text */

        /* Legacy color mappings for compatibility */
        secondary: {
          DEFAULT: "#cce6f4",  /* Columbia Blue */
          foreground: "#1f2937",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#cce6f4",
          foreground: "#1f2937",
          blue: "#3066be",
          teal: "#10b981",
          dark: "#1f2937",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1f2937",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1f2937",
        },
        sidebar: {
          DEFAULT: "#f8fafc",
          foreground: "#1f2937",
          primary: "#3066be",
          "primary-foreground": "#ffffff",
          accent: "#cce6f4",
          "accent-foreground": "#1f2937",
          border: "#e2e8f0",
          ring: "#3066be",
        },

        /* Utility colors */
        "success-green": "#10b981",
        "warning-yellow": "#f59e0b",
        "error-red": "#ef4444",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#64748b",  /* Professional Gray */
          700: "#1f2937",  /* Charcoal */
          800: "#1f2937",
          900: "#111827",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3066be",  /* True Blue */
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },

        /* Custom project colors */
        highlight: "#3066be",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': 'var(--font-size-hero)',
        'section': 'var(--font-size-section)',
        'card': 'var(--font-size-card)',
      },
      boxShadow: {
        'elevation': 'var(--shadow-elevation)',
        'glow': 'var(--glow-effect)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
