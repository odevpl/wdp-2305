import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductReviews from '../../layout/ProductReviews/ProductReviews';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const ProductPage = () => (
  <div className={styles.root}>
    <ProductReviews />
    <NewFurniture rows={1} />
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
