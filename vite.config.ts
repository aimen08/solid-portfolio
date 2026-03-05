import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import ssr from 'vite-plugin-ssr/plugin'
import Unocss from 'unocss/vite'

import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import { presetTypography } from '@unocss/preset-typography'

export default defineConfig({
  plugins: [
    solidPlugin({
      ssr: true,
    }),
    Unocss({
      presets: [
        presetIcons(),
        presetAttributify(),
        presetUno({
          dark: 'media'
        }),
        presetTypography({
          cssExtend: {
            'a': {
              'text-decoration': 'none',
            },
          },
        }),
      ],
      theme: {
        colors: {
          bg: '#0a0a0a',
          surface: '#141414',
          textPrimary: '#f5f5f5',
          muted: '#888888',
          stroke: '#1f1f1f',
          accent: '#f5f5f5'
        },
        fontFamily: {
          body: ['Inter', 'sans-serif'],
          display: ['Instrument Serif', 'serif']
        }
      }
    }),
    ssr({
      prerender: true,
    }),
  ],
  build: {
    target: 'esnext',
  },
})