import { Router } from 'express';
import quotes from 'app/api/routes/quotes';

export default (services) => {
  const app = Router();
  quotes(app, services);

  return app;
};
