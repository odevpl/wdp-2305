import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductReviews from '../../layout/ProductReviews/ProductReviews';

const ProductPage = () => (
  <div className={styles.root}>
    <ProductReviews />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
