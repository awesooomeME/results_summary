import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        reaction_primary: 'hsl(0, 100%, 67%)',
        memory_primary: 'hsl(39, 100%, 56%)',
        verbal_primary: 'hsl(166, 100%, 37%)',
        visual_primary: 'hsl(234, 85%, 45%)',
        white_neutral: 'hsl(0, 0%, 100%)',
        pale_blue_neutral: 'hsl(221, 100%, 96%)',
        light_lavender_neutral: 'hsl(241, 100%, 89%)',
        dark_gray_blue_neutral: 'hsl(224, 30%, 27%)',
      },
      fontWeight: {
        normal: '500',
        heavy: '700',
        extra_heavy: '800'
      },
      backgroundImage: {
        background_gradient: 'linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))',
        background_circle: 'linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))'
      }
    },
  },
  plugins: [],
}
export default config
