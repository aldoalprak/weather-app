const express = require('express');
const nextJS = require('next');
const { isBlockedPage, isInternalUrl } = require('next-server/dist/server/utils');

async function start() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = nextJS({ dev });
  const server = express();
  await app.prepare();

  server.get('/*', async (req, res, next) => {
    try {

      const pathName = req.originalUrl;
      if (isInternalUrl(req.url)) {
        return app.handleRequest(req, res, req.originalUrl)
      }

      if (isBlockedPage(pathName)) {
        return app.render404(req, res, req.originalUrl)
      }

      req.locals = {};
      req.locals.context = {};
      const html = await app.renderToHTML(req, res, '/', {});

      const context = req.locals.context;
      if (context.url) {
        return res.redirect(context.url)
      }

      if (context.status) {
        return res.status(context.status).send();
      }

      if (html === null) {
        return;
      }

      app.sendHTML(req, res, html);
    } catch (e) {
      next(e);
    }
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000`);
  });
}

start();