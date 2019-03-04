const express = require('express')
const next = require('next')
const path = require('path')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()
  // server.use('/_next', express.static(path.join(__dirname, '.next')))

  server.get('/blog', (req, res) => {
    return app.render(req, res, '/allBlogs')
  })

  server.get('/blog/:slug', (req, res) => {
    return app.render(req, res, '/post', { slug: req.params.slug })
  })

  server.get('/_preview/:id/:postType/:wpnonce', (req, res) => {
    const actualPage = '/preview';
    const queryParams = { id: req.params.id, postType: req.params.postType, wpnonce: req.params.wpnonce };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/:slug', (req, res) => {
    const actualPage = '/page';
    const queryParams = { slug: req.params.slug };
    app.render(req, res, actualPage, queryParams);
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

// module.exports = server;
