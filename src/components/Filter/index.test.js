import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Filter from './index';

test('Filter to render correctly', () => {
  const { getByText } = render(
    <Filter
      label="label"
      qty={3}
    />
  );
  expect(getByText('Label'));
  expect(getByText('3'));
});

test('Filter to be selected', () => {
  const { getByTestId } = render(
    <Filter
      label="label"
      selected
    />
  );
  const filterButton = getByTestId('filter');
  expect(filterButton.classList.contains('filter-selected'));
});

test('Filter to call handleClick()', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <Filter
      label="label"
      handleClick={handleClick}
    />
  );
  const filterButton = getByTestId('filter');
  fireEvent.click(filterButton);
  expect(handleClick).toHaveBeenCalledTimes(1);
})
