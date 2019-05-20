import React from 'react';

import styles from './styles.scss';

const Wrapper = props => <div className={styles.Wrapper}>{props.children}</div>;

export default Wrapper;
