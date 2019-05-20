import React from 'react';

import styles from './styles.scss';

const BodyWrapper = props => <div className={styles.outer_wrapper}>{props.children}</div>;

export default BodyWrapper;
