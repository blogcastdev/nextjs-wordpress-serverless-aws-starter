/* eslint import/no-unresolved: 0 */
/* eslint no-restricted-syntax: 0 */
/* eslint import/no-dynamic-require: 0 */
/* eslint global-require: 0 */
const path = require('path');
const express = require('express');
const pathMatch = require('path-match');
const { parse } = require('url');

const app = express();
const route = pathMatch();
const awsServerlessExpress = require('aws-serverless-express');
const binaryMimeTypes = require('./binaryMimeTypes');

const matches = [
  { route: route('/blog'), page: '/allBlogs' },
  { route: route('/blog/:slug'), page: '/post' },
  { route: route('/:slug'), page: '/page' },
];

/**
 * Serve Next assets.
 */
app.use('/_next', express.static(path.join(__dirname, '.next')));


/**
 * Match index route
 */
app.get('/', require('./.next/serverless/pages/index.js').render);


/**
 * Match other routes
 */
app.get('*', (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname } = parsedUrl;
  let hasMatch = false;

  for (const match of matches) {
    const params = match.route(pathname);

    if (params) {
      req.params = params;

      try {
        require(`./.next/serverless/pages${match.page}`).render(req, res);
      } catch (err) {
        require('./.next/serverless/pages/_error.js').render(req, res);
      }
      hasMatch = true;
      break;
    }
  }

  if (!hasMatch) {
    try {
      require(`./.next/serverless/pages${pathname}`).render(req, res);
    } catch (err) {
      require('./.next/serverless/pages/_error.js').render(req, res);
    }
  }
});

// 404 handler
app.get('*', require('./.next/serverless/pages/_error.js').render);

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
module.exports.server = (event, context) => { awsServerlessExpress.proxy(server, event, context); };
