import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
  '/api/imageProxy',
  createProxyMiddleware({
    target: '',
    changeOrigin: true,
    pathRewrite: {
      '^/api/imageProxy/': '/',
    },
    router: function (req) {
      return req.url;
    },
  })
);

app.listen(3001, () => console.log('Proxy server running on port 3001'));
