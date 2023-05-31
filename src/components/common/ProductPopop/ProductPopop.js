import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductPopup = ({ name, price, closePopup }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.closeButton} onClick={closePopup}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              className={styles.image}
              alt={name}
              src={process.env.PUBLIC_URL + `/images/products/${name}.jpg`}
            />
          </div>
          <div className={styles.right}>
            <h2>{name}</h2>
            <p className={styles.price}>Price: ${price}</p>
            <p className={styles.description}>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  closePopup: PropTypes.func,
};

export default ProductPopup;
