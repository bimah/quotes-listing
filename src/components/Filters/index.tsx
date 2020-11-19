import React, { useState, FunctionComponent } from 'react';

import styles from './main.scss';

import Filter from '../Filter';

type Quote = {
  id: number,
  product: string,
  name: string,
  price: number,
  features: Record<string, unknown>[]
}

type FiltersProps = {
  items: Quote[],
  handleFilter?: (string) => void
};

const Filters:FunctionComponent<FiltersProps> = ({ items, handleFilter }) => {
  const [selected, setSelected] = useState<string>('all');

  const filterQuotes = (filter: string): void => {
    setSelected(filter);
    handleFilter(filter);
  };

  const filters = ():string[] => {
    const finalFilters = [];
    items.forEach(item => {
      if (!finalFilters.includes(item.product)) finalFilters.push(item.product);
    });
    return finalFilters;
  };

  return items.length > 1 ? (
    <nav aria-label="Filter your quotes" aria-controls="quotes" data-testid="filters">
        <ul className={styles['filters__list']}>
          <li>
            <Filter label="all" qty={items?.length} selected={selected === 'all'} handleClick={() => filterQuotes('all')} />
          </li>
          {filters().map((filter:string) => (
            <li key={filter}>
                <Filter
                  label={filter}
                  qty={items.filter(item => item.product === filter).length}
                  selected={selected === filter}
                  handleClick={() => filterQuotes(filter)}
                />
            </li>
          ))
          }
        </ul>
      </nav>
    ) : null;
};

Filters.defaultProps = {
  handleFilter: () => null
};

export default Filters;
