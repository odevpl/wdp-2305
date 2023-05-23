import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Shop.module.scss';

const Shop = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>Banner</div>{' '}
      <div className='row'>
        <div className='col-9 p-0'>Product List</div>
        <div className='col-3 p-0'>Filters</div>
      </div>
      <div className='row'>Brands</div>
    </div>
  </div>
);

// Shop.propTypes = {};

export default Shop;
