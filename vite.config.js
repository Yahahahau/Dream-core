import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

function gitSha() {
  try { return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); }
  catch (e) { return 'local'; }
}

// Unique id for every build; the running game polls version.json and reloads
// itself when this changes (see src/utils/UpdateChecker.js).
const BUILD_ID = `${Date.now().toString(36)}-${process.env.GITHUB_SHA ? process.env.GITHUB_SHA.slice(0, 7) : gitSha()}`;

export default defineConfig({
  base: './',
  define: {
    __BUILD_ID__: JSON.stringify(BUILD_ID),
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1500,
    assetsInlineLimit: 0,
  },
  plugins: [{
    name: 'dreamscape-version-json',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'version.json',
        source: JSON.stringify({ build: BUILD_ID, version: pkg.version, time: new Date().toISOString() }, null, 2),
      });
    },
  }],
  server: { host: true },
});
