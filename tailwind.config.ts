
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'dancing': ['Dancing Script', 'cursive'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
			keyframes: {
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'morph': {
					'0%, 100%': {
						borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
					},
					'50%': {
						borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
					}
				},
				'swipe': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%)',
						opacity: '0'
					}
				},
				'diagonalGrow': {
					'0%': {
						width: '0%',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						width: '100%',
						opacity: '0'
					}
				},
				'flow': {
					'0%': {
						transform: 'translateX(-100px)',
						opacity: '0'
					},
					'20%': {
						opacity: '1'
					},
					'80%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(calc(100vw + 100px))',
						opacity: '0'
					}
				},
				'brushStroke': {
					'0%': {
						strokeDashoffset: '1200'
					},
					'100%': {
						strokeDashoffset: '0'
					}
				},
				'pulseFlow': {
					'0%': {
						transform: 'translateX(-100%) scaleX(0)',
						opacity: '0'
					},
					'20%': {
						transform: 'translateX(-50%) scaleX(1)',
						opacity: '1'
					},
					'80%': {
						transform: 'translateX(50%) scaleX(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%) scaleX(0)',
						opacity: '0'
					}
				},
				'fadeInUp': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'subtle-wobble': {
				  '0%, 100%': { transform: 'rotate(-2deg) scale(1.03)' },
				  '50%': { transform: 'rotate(2deg) scale(0.97)' },
				},
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'icon-jiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'icon-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '.9' },
        },
        'icon-stack': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'icon-trend': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-5px) translateX(5px)' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'shake': 'shake 0.5s ease-in-out',
				'float': 'float 6s ease-in-out infinite',
				'morph': 'morph 10s ease-in-out infinite',
				'swipe': 'swipe 2s ease-in-out infinite',
				'diagonalGrow': 'diagonalGrow 1.5s ease-out infinite',
				'flow': 'flow 3s ease-in-out infinite',
				'brushStroke': 'brushStroke 2s ease-in-out infinite',
				'pulseFlow': 'pulseFlow 2s ease-in-out infinite',
				'fadeInUp': 'fadeInUp 0.6s ease-out',
				'subtle-wobble': 'subtle-wobble 5s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 3s ease-in-out infinite',
        'icon-jiggle': 'icon-jiggle 0.4s ease-in-out 3',
        'icon-pulse': 'icon-pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'icon-stack': 'icon-stack 1.2s ease-in-out infinite',
        'icon-trend': 'icon-trend 1.2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
