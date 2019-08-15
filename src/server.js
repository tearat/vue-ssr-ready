const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const path = require('path')

const template = require('fs').readFileSync(path.resolve('./src/index.template.html'), 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // рекомендуется
  template, // (опционально) шаблон страницы
  clientManifest // (опционально) манифест клиентской сборки
})

const server = express();

server.use('/dist', express.static(path.join(__dirname, './dist')));
// server.use(express.static('public'));
// server.use('/dist', express.static('./dist'));
// server.use('/public', express.static('./public'));

// внутри обработчика сервера...
server.get('*', (req, res) => {
  const context = { url: req.url }
  // Нет необходимости передавать приложение тут, потому что оно автоматически создаётся
  // при выполнении сборки. Теперь наш сервер отделён от нашего приложения Vue!
  renderer.renderToString(context, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Страница не найдена')
        } else {
          res.status(500).end('Внутренняя ошибка сервера')
        }
      } else {
        res.set({ 'content-type': 'text/html; charset=utf-8' });
        res.end(html)
      }
  })
})


server.listen(8080, '0.0.0.0', () => {
  console.log(`server started at localhost: 8080`)
})
