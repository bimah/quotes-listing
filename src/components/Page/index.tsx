import React, { Fragment, FunctionComponent } from 'react';

import QuotesListing from '../QuotesListing';

import styles from './main.scss';

const Page:FunctionComponent = () => (
  <Fragment>
    <header/>
    <main className={styles['main-content']}>
      <QuotesListing />
    </main>
    <footer/>
  </Fragment>
);

export default Page;
