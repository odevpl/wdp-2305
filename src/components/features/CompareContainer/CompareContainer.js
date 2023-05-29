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
          <CompareBox key={product.id} product={product} />
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
