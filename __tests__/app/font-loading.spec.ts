import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const projectRoot = resolve(__dirname, '../..')
const layoutPath = resolve(projectRoot, 'src/app/layout.tsx')
const globalsPath = resolve(projectRoot, 'src/app/globals.css')

describe('font loading', () => {
  it('uses a bundled font instead of fetching from Google during the build', () => {
    const layout = readFileSync(layoutPath, 'utf8')
    const globals = readFileSync(globalsPath, 'utf8')

    expect(layout).toContain('@ibm/plex-mono/css/ibm-plex-mono-all.css')
    expect(layout).not.toContain('next/font/google')
    expect(existsSync(resolve(projectRoot, 'node_modules/@ibm/plex-mono'))).toBe(true)
    expect(globals).toContain("font-family: 'IBM Plex Mono'")
  })
})
