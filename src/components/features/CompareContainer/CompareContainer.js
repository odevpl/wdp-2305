import React from 'react';
import CompareBox from '../CompareBox/CompareBox';
import styles from './CompareContainer.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

const CompareContainer = ({ productsToCompare }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Products to compare</h5>
      <div className={styles.list}>
        {productsToCompare.map(product => (
          <div key={product.id} className={styles.compareItem}>
            <CompareBox product={product} />
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.productPrice}>Price: {product.price}</p>
              <p className={styles.productFavorite}>
                {product.isFavorite ? 'Favorite' : 'Not Favorite'}
              </p>
            </div>
          </div>
        ))}
        <Button variant='small'>Compare</Button>{' '}
      </div>
    </div>
  );
};

CompareContainer.propTypes = {
  productsToCompare: PropTypes.array,
};

export default CompareContainer;
