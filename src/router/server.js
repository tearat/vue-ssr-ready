const express = require('express')
const router = express.Router()
const renderer = require('../app/renderer')

const noErr = (err) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Страница не найдена')
        return false
      } else {
        res.status(500).end('Внутренняя ошибка сервера')
        return false
      }
    } else {
        return true
    }
}

router.get('*', (req, res) => {
  const context = {
      url: req.url
  }
  renderer.renderToString(context, (err, html) => {
      if ( noErr(err) ) {
          res.set({ 'content-type': 'text/html; charset=utf-8' });
          res.end(html)
      }
  })
})

module.exports = router;
