import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';

import config from 'app/config';

async function startServer() {
  const app = express();

  // eslint-disable-next-line global-require
  await require('./app/loaders').default({ expressApp: app });

  app
    .listen(config.port, () =>
      console.log(`🛡️  Server listening on port: ${config.port} 🛡️`),
    )
    .on('error', () => {
      process.exit(1);
    });
}

startServer();
