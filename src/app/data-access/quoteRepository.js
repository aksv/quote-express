import quotes from 'quotesy';
import { v4 } from 'uuid';

export default class QuoteRepository {
  constructor() {
    this.quotes = quotes.parse_json().map((quote) => ({
      id: v4(),
      ...quote,
    }));
  }

  getQuotes() {
    return this.quotes;
  }

  getRandomQuote() {
    const availableQuotes = this.quotes.filter((quote) => !quote.deleted);
    return availableQuotes[Math.floor(Math.random() * this.quotes.length)];
  }

  getRandomQuoteByTag(tag) {
    const quoteByTag = this.quotes.filter(
      (quote) =>
        !quote.deleted &&
        ((quote.tags && quote.tags.includes(tag)) || quote.text.includes(tag)),
    );
    return quoteByTag[Math.floor(Math.random() * quoteByTag.length)];
  }

  saveQuote(quote) {
    const newQuote = {
      id: v4(),
      ...quote,
    };
    this.quotes.push(newQuote);
    return newQuote;
  }

  findQuoteById(id) {
    return this.quotes.find((quote) => quote.id === id && !quote.deleted);
  }

  updateQuote(id, updatedQuote) {
    this.quotes = this.quotes.map((quote) => {
      if (quote.id === id) {
        return updatedQuote;
      }
      return quote;
    });
  }

  deleteQuote(id) {
    this.quotes = this.quotes.map((quote) => {
      if (quote.id === id) {
        return {
          ...quote,
          deleted: true,
        };
      }
      return quote;
    });
  }
}
