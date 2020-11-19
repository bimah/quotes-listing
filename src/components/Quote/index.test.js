import React from 'react';
import { render } from '@testing-library/react';

import { formatValue } from '../../utils/misc';

import Quote from './index';

const testQuote = {
  id: 0,
  product: 'car',
  name: 'test car one',
  price: 123456,
  features: {
    test: 'just a test',
    'complex-test': 'just an - in it'
  }
};

const testQuoteNoPrice = {
  id: 0,
  product: 'car',
  name: 'test car one',
  features: {
    test: 'just a test',
    'complex-test': 'just an - in it'
  }
};

test('Quote to render correctly', () => {
  const { getByText } = render(
    <Quote
      item={testQuote}
    />
  );
  expect(getByText('test car one'));
});

test('Quote to format details correctly', () => {
  const { getByText } = render(
    <Quote
      item={testQuote}
    />
  );
  expect(getByText(formatValue(testQuote.price)));
  expect(getByText('Complex test:'));
});

test('Quote to show alternative text if no price', () => {
  const { getByText } = render(
    <Quote
      item={testQuoteNoPrice}
    />
  );
  expect(getByText('Price not available'));
  expect(getByText('Search again'));
})
