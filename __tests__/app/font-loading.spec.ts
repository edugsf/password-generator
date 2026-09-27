import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const projectRoot = resolve(__dirname, '../..')
const layoutPath = resolve(projectRoot, 'src/app/layout.tsx')
const globalsPath = resolve(projectRoot, 'src/app/globals.css')

describe('font loading', () => {
  it('uses a bundled font instead of fetching from Google during the build', () => {
    const layout = readFileSync(layoutPath, 'utf8')
    const globals = readFileSync(globalsPath, 'utf8')

    const packageJson = JSON.parse(
      readFileSync(resolve(projectRoot, 'package.json'), 'utf8')
    )

    expect(layout).toContain('@fontsource/ibm-plex-mono/latin-400.css')
    expect(layout).toContain('@fontsource/ibm-plex-mono/latin-700.css')
    expect(layout).not.toContain('next/font/google')
    expect(packageJson.dependencies['@fontsource/ibm-plex-mono']).toBeDefined()
    expect(existsSync(resolve(projectRoot, 'node_modules/@fontsource/ibm-plex-mono'))).toBe(true)
    expect(globals).toContain("font-family: 'IBM Plex Mono'")
  })
})
