import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SecondaryWrapper from '../../Common/BodyWrapper/SecondaryWrapper';
import styles from './styles.scss';

class DashDetail extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.wrapper}>
        <h2>{data.name}</h2>
        <div className={styles.secondColumn}>
           <h3>Value is {data.value}</h3>
        </div>
        <div className={styles.firstColumn}>
          <h3>{data.value/100}% of overall</h3>
        </div>
      </div>
    );
  }
}


export default DashDetail;

