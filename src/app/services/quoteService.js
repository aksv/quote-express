export default class QuoteService {
  constructor(quoteRepository) {
    this.quoteRepository = quoteRepository;
  }

  getQuotes() {
    return this.quoteRepository.getQuotes();
  }

  getRandomQuote() {
    return this.quoteRepository.getRandomQuote();
  }

  getRandomQuoteByTag(tag) {
    return this.quoteRepository.getRandomQuoteByTag(tag);
  }

  createQuote(quote) {
    return this.quoteRepository.saveQuote(quote);
  }

  getQuoteById(id) {
    return this.quoteRepository.findQuoteById(id);
  }

  updateQuote(id, quoteUpdate) {
    const prevQuote = this.quoteRepository.findQuoteById(id);
    if (!prevQuote) {
      return null;
    }
    const updated = {
      ...prevQuote,
      ...quoteUpdate,
    };
    this.quoteRepository.updateQuote(id, updated);
    return updated;
  }

  deleteQuote(id) {
    const quote = this.quoteRepository.findQuoteById(id);
    if (!quote) {
      return null;
    }
    this.quoteRepository.deleteQuote(id);
    return quote;
  }
}
