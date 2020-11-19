import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Filters from './index';

const items = [
  {
    id: 0,
    product: 'car',
    name: 'test car one',
    price: 123456,
    features: {
      test: 'just a test',
      'complex-test': 'just an - in it'
    }
  },
  {
    id: 0,
    product: 'bike',
    name: 'test car one',
    price: 123456,
    features: {
      test: 'just a test',
      'complex-test': 'just an - in it'
    }
  }
];

test('Filters to render correctly', () => {
  const { getAllByTestId, getByText } = render(
    <Filters
      items={items}
    />
  );
  const allFilters = getAllByTestId('filter');
  expect(allFilters.length).toBe(3);
  expect(getByText('All'));
  expect(allFilters[0].classList.contains('filter-selected'));
});

test('Filters to change selected', () => {
  const { getAllByTestId } = render(
    <Filters
      items={items}
    />
  );
  const allFilters = getAllByTestId('filter');
  fireEvent.click(allFilters[1]);
  expect(allFilters[1].classList.contains('filter-selected'));
});

test('Filters to call handleFilter()', () => {
  const handleFilter = jest.fn();
  const { getAllByTestId } = render(
    <Filters
      items={items}
      handleFilter={handleFilter}
    />
  );
  const allFilters = getAllByTestId('filter');
  fireEvent.click(allFilters[1]);
  expect(handleFilter).toHaveBeenCalledTimes(1);
});
