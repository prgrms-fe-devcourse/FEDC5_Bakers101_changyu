const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/posts/update',
    createProxyMiddleware({
      target: 'https://kdt.frontend.5th.programmers.co.kr:5005',
      changeOrigin: true
    })
  )
}
