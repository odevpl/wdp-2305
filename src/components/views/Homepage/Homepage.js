import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BrandsList from '../../layout/BrandsList/BrandsList';
import ProductsGallery from '../../features/ProductsGallery/ProductsGallery';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <ProductsGallery />
    <BrandsList />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
