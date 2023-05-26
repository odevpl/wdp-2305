import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryProduct.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const GalleryProduct = ({ name, stars, price }) => {
  return (
    <div className={styles.root}>
      {' '}
      <img
        className={styles.image}
        alt={name}
        src={process.env.PUBLIC_URL + `/images/products/${name}.jpg`}
      />
      <div className={styles['price-circle']}></div>
      <div className={styles.outlines}>
        <Button
          // className={isFavorite ? styles.favorite : ''}
          variant='outline'
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          <div className={styles.tooltip}>Add to favorites</div>
        </Button>
        <Button
          // className={compare ? styles.compare : ''}
          variant='outline'
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          <div className={styles.tooltip}>Add to compare</div>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye}>View more</FontAwesomeIcon>
          <div className={styles.tooltip}>View more</div>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
          <div className={styles.tooltip}>Add to cart</div>
        </Button>
      </div>
      <div className={styles['circle-price']}>
        <p>${price}</p>{' '}
        <p>
          <span className={styles.crossed}>$200</span>
        </p>
      </div>
      <div className={styles['product-details']}>
        {name}{' '}
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

GalleryProduct.propTypes = {
  name: PropTypes.string,
  stars: PropTypes.number,
  price: PropTypes.number,
};

export default GalleryProduct;
