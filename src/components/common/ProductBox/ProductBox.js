import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { favoriteProduct } from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  favorite,
  id,
  oldPrice = null,
  compare,
}) => {
  const dispatch = useDispatch();

  const handleClickFavorite = id => {
    dispatch(favoriteProduct(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <Link to={id}>
          <Link to={id}>
            <img
              className={styles.image}
              alt={name}
              src={process.env.PUBLIC_URL + `/images/products/${name}.jpg`}
            />
          </Link>
        </Link>
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={id}>
          <Link to={id}>
            <h5>{name}</h5>
          </Link>
        </Link>
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
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            favorite={favorite}
            variant='outline'
            onClick={e => {
              e.preventDefault();
              handleClickFavorite(id);
            }}
          >
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
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  id: PropTypes.string,
};

export default ProductBox;
