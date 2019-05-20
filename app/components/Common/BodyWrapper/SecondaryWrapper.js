import React from 'react';

import styles from './styles.scss';

const SecondaryWrapper = props => <div className={[styles.innerWrapper, props.isBG && styles.bg].join(' ')}>{props.children}</div>;

export default SecondaryWrapper;