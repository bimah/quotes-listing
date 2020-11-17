import React, { FunctionComponent, useState, useEffect } from 'react';

import Request from '../../utils/request';

import styles from './main.scss';

import Filters from '../Filters';
import Quote from '../Quote';

type Quote = {
  id: number,
  product: string,
  name: string,
  price: number,
  features: Record<string, unknown>[]
}

type QuotesObj = {
  quotes: Quote[]
};

const QuotesListing:FunctionComponent = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getQuote = async () => {
      const savedQuotes = await Request.get<QuotesObj>('https://gc-frontendchallenge-2019.azurewebsites.net/api/EasyMode')
        .then(data => setQuotes(data.quotes));
    };
    getQuote();
  }, []);

  return (
    <div className={styles['quotes-listing']}>
      <Filters />
      <h1>You have {quotes?.length} quote(s) saved</h1>
      <div role="region" id="quotes" aria-live="polite">
        <div className={styles['quotes-listing__quotes']}>
          <Quote />
        </div>
      </div>
    </div>
  )
};

export default QuotesListing;
