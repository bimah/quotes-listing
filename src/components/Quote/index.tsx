import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import { convertKey, capitaliseFirstLetter, formatValue, convertCurrency } from '../../utils/misc';

import styles from './main.scss';

import Link from '../Link';

const cx = classnames.bind(styles);

type Quote = {
  id: number,
  product: string,
  name: string,
  price?: number,
  features: Record<string, unknown>[]
}

type QuoteProps = {
  item: Quote
};

const Quote:FunctionComponent<QuoteProps> = ({ item }) => (
  <div className={styles.quote} data-testid="quote">
    <div className={styles['quote__title']}>
      <h3>{item.name}</h3>
    </div>
    <div className={styles['quote__content']}>
      <div className={cx('quote__content-info', 'quote__content-item')}>
        <h4>Quote details:</h4>
        {Object.entries(item.features).map(([key, value]) => (
          <p key={key}>{`${capitaliseFirstLetter(convertKey(key))}: `}<b>{formatValue(value)}</b></p>
        ))}
      </div>
      <div className={cx('quote__content-price', 'quote__content-item')}>
        <div className={styles['quote__content-price__half']}>
          {item.price
            ? <p className={styles['quote__content-price__amount']}>{convertCurrency(item.price)}</p>
            : <p>Price not available</p>
          }
        </div>
        <div className={styles['quote__content-price__half']}>
          <p>{`We compared hundreds of ${item.product} insurances to find you the best price.`}</p>
        </div>
      </div>
      <div className={cx('quote__content-action', 'quote__content-item', 'quote__content-item--center')}>
        <Link>{item.price ? 'Complete' : 'Search again'}</Link>
      </div>
    </div>
  </div>
);

export default Quote;
