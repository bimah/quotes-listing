import React, { FunctionComponent } from 'react';

import styles from './main.scss';

import Filter from '../Filter';

const Filters:FunctionComponent = () => (
  <nav aria-label="Filter your quotes" aria-controls="quotes">
      <ul className={styles['filters__list']}>
        <li>
          <Filter label="All" qty={7} selected />
        </li>
        <li>
          <Filter label="Car" qty={3} />
        </li>
        <li>
          <Filter label="Pet" qty={4} />
        </li>
      </ul>
    </nav>
);

export default Filters;
