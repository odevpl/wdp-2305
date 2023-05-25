import React from 'react';
import styles from './CompareBox.module.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { addProductToCompare } from '../../../redux/productsRedux';
import PropTypes from 'prop-types';

const CompareBox = product => {
  const dispatch = useDispatch();

  const handleRemove = e => {
    e.preventDefault();
    dispatch(addProductToCompare(product.product.id));
  };

  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img
          alt={product.product.name}
          src={process.env.PUBLIC_URL + `/images/products/${product.product.name}.jpg`}
        />
        <button className={styles.closeButton} onClick={handleRemove}>
          <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

CompareBox.propTypes = {
  product: PropTypes.object,
};

export default CompareBox;
