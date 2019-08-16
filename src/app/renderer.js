const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')
const template = require('fs').readFileSync(path.resolve('./src/index.template.html'), 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // рекомендуется
  template, // (опционально) шаблон страницы
  clientManifest // (опционально) манифест клиентской сборки
})

module.exports = renderer;
