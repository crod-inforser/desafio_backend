import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import c from 'config';

import routes from '../routes';

export default function createApp(): express.Application {
  const app = express();

  app.use(cors());

  if (c.get('NODE_ENV') === 'development') { app.use(morgan('dev')); }

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(routes);

  return app;
}
