import React from 'react';
import styles from './CompareBox.module.scss';
import Button from '../../common/Button/Button';
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
      <img
        alt={product.product.name}
        src={process.env.PUBLIC_URL + `/images/products/${product.product.name}.jpg`}
      />
      <Button variant='outline' className={styles.closeButton} onClick={handleRemove}>
        <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
      </Button>
    </div>
  );
};

CompareBox.propTypes = {
  product: PropTypes.object,
};

export default CompareBox;
