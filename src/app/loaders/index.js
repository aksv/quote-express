import expressLoader from 'app/loaders/expressLoader';
import { QuoteRepository } from 'app/data-access';
import { QuoteService } from 'app/services';

export default async ({ expressApp }) => {
  const quoteRepository = new QuoteRepository();
  const quoteService = new QuoteService(quoteRepository);
  await expressLoader({ app: expressApp, services: { quoteService } });
};
