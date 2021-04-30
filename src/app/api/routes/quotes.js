import { Router } from 'express';

const route = Router();

function notFound(id, res) {
  res.json({
    status: 'NOT_FOUND',
    message: `Quote with id ${id} is not found`,
  });
}

export default (app, services) => {
  app.use('/quotes', route);

  const { quoteService } = services;

  route.get('/', (_, res) => res.json(quoteService.getQuotes()).status(200));

  route.get('/random', (req, res) => {
    if (req.query.tag) {
      res.json(quoteService.getRandomQuoteByTag(req.query.tag));
    } else {
      res.json(quoteService.getRandomQuote());
    }
    res.status(200);
  });

  route.post('/', (req, res) => {
    const quote = quoteService.createQuote(req.body);
    res.json(quote);
  });

  route.get('/:id', (req, res) => {
    const { id } = req.params;
    const quote = quoteService.getQuoteById(id);
    if (quote) {
      res.json(quote);
    } else {
      notFound(id, res);
    }
  });

  route.put('/:id', (req, res) => {
    const { id } = req.params;
    const quoteUpdate = req.body;
    delete quoteUpdate.id;
    const updated = quoteService.updateQuote(id, quoteUpdate);
    if (updated) {
      res.json(updated);
    } else {
      notFound(id, res);
    }
  });

  route.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deleted = quoteService.deleteQuote(id);
    if (deleted) {
      res.json(deleted);
    } else {
      notFound(id, res);
    }
  });
};
