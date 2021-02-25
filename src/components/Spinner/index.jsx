import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return <div className={styles.loader}>Loading...</div>;
};

Spinner.propTypes = {};

export default Spinner;
