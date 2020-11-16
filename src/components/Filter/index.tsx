import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './main.scss';

const cx = classnames.bind(styles);

type FiltersProps = {
  label: string,
  qty: number,
  selected?: boolean
};

const Filter:FunctionComponent<FiltersProps> = ({ label, qty, selected }) => (
  <button type="button" aria-pressed={selected} className={cx('filter', { 'filter-selected': selected })}>
    {label}
    <span>{qty}</span>
  </button>
);

Filter.defaultProps = {
  selected: false
};

export default Filter;
