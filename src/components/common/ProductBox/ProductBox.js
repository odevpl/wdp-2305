import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import Stars from '../Stars/Stars';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  oldPrice = null,
  isFavorite,
  compare,
  userStars,
  id,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img
          className={styles.image}
          alt={name}
          src={process.env.PUBLIC_URL + `/images/products/${name}.jpg`}
        />
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button className={isFavorite ? styles.favorite : ''} variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button className={compare ? styles.compare : ''} variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className='d-flex '>
          {oldPrice != null && (
            <div className={(styles.price, styles.crossed)}>
              <Button noHover variant='small' className={styles['crossed-button']}>
                $ {oldPrice}
              </Button>
            </div>
          )}
          <div className={styles.price}>
            <Button className={styles.priceButton} noHover variant='small'>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  isFavorite: PropTypes.bool,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
  id: PropTypes.number,
};

export default ProductBox;
