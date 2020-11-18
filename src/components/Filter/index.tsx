import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import { capitaliseFirstLetter } from '../../utils/misc';

import styles from './main.scss';

const cx = classnames.bind(styles);

type FiltersProps = {
  label: string,
  qty: number,
  selected?: boolean,
  handleClick: () => void
};

const Filter:FunctionComponent<FiltersProps> = ({ label, qty, selected,handleClick }) => (
  <button type="button" aria-pressed={selected} className={cx('filter', { 'filter-selected': selected })} onClick={handleClick}>
    {capitaliseFirstLetter(label)}
    {qty ? <span>{qty}</span> : null}
  </button>
);

Filter.defaultProps = {
  selected: false,
  qty: null
};

export default Filter;
