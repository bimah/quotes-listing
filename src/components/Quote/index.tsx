import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './main.scss';

const cx = classnames.bind(styles);

const Quote:FunctionComponent = () => (
  <div className={styles.quote}>
    <div className={styles['quote__title']}>
      <h3>BMW 330ci Sport Coupe 2979cc</h3>
    </div>
    <div className={styles['quote__content']}>
      <div className={cx('quote__content-info', 'quote__content-item')}>
        <p>info</p>
      </div>
      <div className={cx('quote__content-price', 'quote__content-item')}>
        <p>price</p>
        <p>price</p>
        <p>price</p>
        <p>price</p>
        <p>price</p>
      </div>
      <div className={cx('quote__content-action', 'quote__content-item')}>
        <p>cta</p>
      </div>
    </div>
  </div>
);

export default Quote;
