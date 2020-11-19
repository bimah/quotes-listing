import React from 'react';
import { render } from '@testing-library/react';

import Link from './index';

test('Link to render children', () => {
  const { getByText } = render(
    <Link>Just a test</Link>
  );
  expect(getByText('Just a test'));
});

test('Link to have correct href', () => {
  const { getByTestId } = render(
    <Link url="http://google.com">test</Link>
  );
  expect(getByTestId('link').getAttribute('href')).toBe('http://google.com');
});
