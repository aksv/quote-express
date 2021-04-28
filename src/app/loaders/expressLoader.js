import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from 'app/api';
import config from 'app/config';

export default ({ app, services }) => {
  app.use(cors());
  app.use(express.json());

  app.use(express.static(path.join(__dirname, '../../..', 'static')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.get('/ping', (_, res) => {
    res.json({
      statusCode: 200,
      message: 'OK',
      time: new Date().toString(),
    });
  });

  app.use(config.api.prefix, routes(services));
  app.use((_, __, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });
  app.use((err, _, res) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
