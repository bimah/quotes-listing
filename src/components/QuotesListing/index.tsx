import React, { FunctionComponent } from 'react';

import styles from './main.scss';

import Filters from '../Filters';
import Quote from '../Quote';

const QuotesListing:FunctionComponent = () => (
  <div className={styles['quotes-listing']}>
    <Filters />
    <h1>You have 7 quote(s) saved</h1>
    <div role="region" id="quotes" aria-live="polite">
      <div className={styles['quotes-listing__quotes']}>
        <Quote />
      </div>
    </div>
  </div>
);

export default QuotesListing;
