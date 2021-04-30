import { useState, useCallback, useEffect } from 'react';

import QuoteCard from '../components/QuoteCard';

async function fetchData(cb) {
  const apiPrefix = process.env.REACT_APP_API_URL || '';
  const response = await fetch(`${apiPrefix}/api/quotes/random`);
  if (response.status === 200) {
    const quote = await response.json();
    cb(quote);
  }
}

export default function QuoteCartContainer() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    fetchData(q => setQuote(q));
  }, []);
  const handleGetNewQuote = useCallback(() => {
    fetchData(q => setQuote(q));
  }, [setQuote]);
  return (
    <div className="container">
      {quote && <QuoteCard title={quote.author} text={quote.text} handleClick={handleGetNewQuote} />} 
    </div>
  );
}