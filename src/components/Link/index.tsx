import React, { FunctionComponent } from 'react';

import styles from './main.scss';

type LinkProps = {
  url?: string
};

const Link:FunctionComponent<LinkProps> = ({ children, url }) => (
  <a href={url} className={styles.link}>
    {children}
  </a>
);

Link.defaultProps = {
  url: '#'
};

export default Link;
