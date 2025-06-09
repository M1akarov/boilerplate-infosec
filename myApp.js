const express = require('express');
const app = express();
const helmet = require('helmet');

const ninetyDaysInSeconds = 90 * 24 * 60 * 60;

app.use(helmet({
  hidePoweredBy: true,
  frameguard: { action: 'deny' },
  xssFilter: true,
  noSniff: true,
  ieNoOpen: true,
  dnsPrefetchControl: true,
  hsts: {
    maxAge: ninetyDaysInSeconds,
    force: true
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"]
    }
  }
}));

app.use(helmet.noCache());

// ...existing code...