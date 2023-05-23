import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import BlogFeature from '../../features/BlogFeature/BlogFeature';
import BrandsList from '../../layout/BrandsList/BrandsList';
import ProductsGallery from '../../features/ProductsGallery/ProductsGallery';

import Banner from '../../common/Banner/Banner';
import Promoted from '../../features/Promoted/Promoted';

const Homepage = () => (
  <div className={styles.root}>
    <Banner />
    <Promoted />
    <FeatureBoxes />
    <NewFurniture />
    <ProductsGallery />
    <BlogFeature />
    <BrandsList />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
