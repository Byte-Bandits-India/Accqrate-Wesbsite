/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
  	extend: {
		  screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
			   sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
  		},
		 colors: {
        background: "#FFFFFF",
        primary: "#C2185B",
        soft: "#F2F2F2",
        card: "#8A8A8A",
        black: "#000000",
      },
  	
  		keyframes: {
  			scrollLeft: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			scrollRight: {
  				'0%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			  shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "skeleton-loading": {
          "0%": { "background-position": "100% 0" },
          "100%": { "background-position": "0 0" },
        },
  		},
  		animation: {
  			scrollLeft: 'scrollLeft 50s linear infinite',
  			scrollRight: 'scrollRight 50s linear infinite',
  			skeleton: 'skeleton 1.2s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			 shimmer: "shimmer 1.25s infinite",
        "skeleton-loading": "skeleton-loading 1.2s ease-in-out infinite",
     
  		},
		 backgroundSize: {
        400: "400% 100%",
      },
		 letterSpacing: {
        heading: "-0.05em",
        para: "-0.02em",
      },
  	}
  },
  plugins: [require("tailwindcss-animate"),
      function ({ addComponents }) {
      addComponents({
        ".text-fluid-h1": {
          fontSize: "36px",
          "@screen md": { fontSize: "54px" },
          "@screen lg": { fontSize: "72px" },
        },
        ".text-fluid-h2": {
          fontSize: "24px",
          "@screen md": { fontSize: "32px" },
          "@screen lg": { fontSize: "36px" },
        },
        ".text-fluid-h3": {
          fontSize: "16px",
          "@screen md": { fontSize: "18px" },
          "@screen lg": { fontSize: "20px" },
        },
        ".text-fluid-body": {
          fontSize: "20px",
          "@screen md": { fontSize: "24px" },
          "@screen lg": { fontSize: "30px" },
        },
        ".text-fluid-small": {
          fontSize: "14px",
          "@screen md": { fontSize: "16px" },
          "@screen lg": { fontSize: "18px" },
        },
      });
    },
  ],
}
