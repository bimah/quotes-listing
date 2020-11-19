import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';

import QuotesListing from './index';

jest.mock('../../utils/request');

test('QoutesListing to render correctly', async () => {
  const { getByText } = render(
    <QuotesListing />
  );
  await waitFor(() => expect(getByText('You have 2 quote(s) saved')));
});

test('QuotesListing to show the all quotes', async () => {
  const { getAllByTestId } = render(
    <QuotesListing />
  );
  await waitFor(() => expect(getAllByTestId('quote')).toHaveLength(2));
});

test('QuotesListing to filter quotes', async () => {
  const { getAllByTestId } = render(
    <QuotesListing />
  );
  await waitFor(() => expect(getAllByTestId('quote')).toHaveLength(2));
  const filters = getAllByTestId('filter');
  fireEvent.click(filters[1]);
  expect(getAllByTestId('quote')).toHaveLength(1);
});
