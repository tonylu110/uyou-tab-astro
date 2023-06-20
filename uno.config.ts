import { defineConfig, transformerDirectives, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno()
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ]
})