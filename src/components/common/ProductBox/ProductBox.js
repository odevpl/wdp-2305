import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { favoriteProduct } from '../../../redux/productsRedux';
import {
  getProductsToCompare,
  addProductToCompare,
} from '../../../redux/productsRedux';
import ProductPopup from '../ProductPopop/ProductPopop';
import { createPortal } from 'react-dom';
import Stars from '../Stars/Stars';
import useLocalStorage from 'use-local-storage';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  favorite,
  id,
  oldPrice = null,
  compare,
  userStars,
  variant,
}) => {
  const classes = [];
  if (variant) classes.push(styles[variant]);
  else classes.push('buttons');

  const dispatch = useDispatch();
  const compareProducts = useSelector(state => getProductsToCompare(state));
  const [showPopup, setShowPopup] = useState(false);

  const handleCompare = e => {
    e.preventDefault();
    if (compareProducts.length < 4 || compare === true) {
      dispatch(addProductToCompare(id));
    }
  };

  const [isFavorite, setIsFavorite] = useLocalStorage(id, favorite || false);

  useEffect(() => {
    dispatch(favoriteProduct(favorite));
  }, [dispatch, favorite, isFavorite]);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleQuickView = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <Link to={id}>
          <img
            className={styles.image}
            alt={name}
            src={process.env.PUBLIC_URL + `/images/products/${name}.jpg`}
          />
        </Link>
        <div className={styles[classes]}>
          <Button variant='small' onClick={handleQuickView}>
            Quick View
          </Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={id}>
          <h5>{name}</h5>
        </Link>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            favorite={isFavorite}
            variant='outline'
            onClick={e => {
              e.preventDefault();
              handleClickFavorite(id);
            }}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={clsx(compare && styles.compare)}
            onClick={handleCompare}
          >
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
      {showPopup &&
        createPortal(
          <ProductPopup name={name} price={price} closePopup={closePopup} />,
          document.body
        )}
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  id: PropTypes.string,
  variant: PropTypes.string,
  userStars: PropTypes.number,
};

export default ProductBox;
