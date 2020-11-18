import React, { FunctionComponent, useState, useEffect } from 'react';

import Request from '../../utils/request';

import styles from './main.scss';

import Filters from '../Filters';
import Quote from '../Quote';

type QuoteType = {
  id: number,
  product: string,
  name: string,
  price: number,
  features: Record<string, unknown>[]
}

type QuotesObj = {
  quotes: QuoteType[]
};

const QuotesListing:FunctionComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const getQuote = async () => {
      const savedQuotes = await Request.get<QuotesObj>('https://gc-frontendchallenge-2019.azurewebsites.net/api/EasyMode')
        .then(data => setQuotes(data.quotes))
        .catch(() => setError(true));
    };
    getQuote();
  }, []);

  if (error) return <h1>We are not able to load your quotes...</h1>

  return (
    <div className={styles['quotes-listing']}>
      <Filters items={quotes} handleFilter={setFilter} />
      <h1>You have {quotes?.length} quote(s) saved</h1>
      <div role="region" id="quotes" aria-live="polite">
        <div className={styles['quotes-listing__quotes']}>
          {quotes.filter(quote => filter === 'all' || filter === quote.product)
          .map(quote => (
            <Quote key={quote.id} item={quote} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default QuotesListing;
