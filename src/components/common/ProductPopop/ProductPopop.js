import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPopup.module.scss';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faExpandAlt,
  faExchangeAlt,
  faShoppingBasket,
  faMinus,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ProductPopup = ({ closePopup, name, oldPrice, price, stars, userStars, id }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.closeButton} onClick={closePopup}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <img
              className={styles.mainPhoto}
              alt={name}
              src={process.env.PUBLIC_URL + `/images/products/${name}.jpg`}
            />
            <Button className={styles.buttonZoom} variant='outline'>
              <FontAwesomeIcon icon={faExpandAlt} />
            </Button>
            <div className={styles.bottomImagesContainer}>
              <div className={styles.smallImages}>
                <div className={styles.smallImage}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/products/Aenean Ru Bristique 2.jpg`
                    }
                    alt='bed'
                  />
                </div>
                <div className={styles.smallImage}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/products/Aenean Ru Bristique 5.jpg`
                    }
                    alt='table'
                  />
                </div>
                <div className={styles.smallImage}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/products/Aenean Ru Bristique 7.jpg`
                    }
                    alt='table'
                  />
                </div>
                <div className={styles.smallImage}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/images/products/Aenean Ru Bristique 10.jpg`
                    }
                    alt='table'
                  />
                </div>
              </div>
              <div className={styles.buttonsLeftRight}>
                <Button className={styles.buttonLeft} variant='outline'>
                  <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </Button>
                <Button className={styles.buttonRight} variant='outline'>
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.productHeader}>
              <div className={styles.title}>
                <h5>{name}</h5>
              </div>
              <div className={styles.arrowButtons}>
                <Button
                  className={`${styles.headerButtonLeft} ${styles.buttonHoverFull}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.headerButtonRight} ${styles.buttonHoverFull}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.productParams}>
              <div className={styles.stars}>
                <Stars stars={stars} userStars={userStars} id={id} />
              </div>
              <Link to='/reviews' className={styles.reviewLink}>
                (0 reviews)
              </Link>
              <div className={styles.verticalLine}>&#124;</div>
              <Link to='/reviews' className={styles.reviewLink}>
                Add Your Review
              </Link>
            </div>
            <div className={styles.line}></div>
            <div className={styles.prices}>
              <div className={styles.oldPrice}>$ {oldPrice}</div>
              <div className={styles.price}>$ {price}</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.aboutProductButtons}>
              <div className={styles.actionButtons}>
                <Button className={styles.addToCartBtn} variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
                <Button
                  className={`${styles.heartBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.toggleBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.envelopeBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.quantityButtons}>
                <div className={styles.quantityText}>Quantity:</div>
                <Button className={styles.quantityBtn} noHover variant='outline'>
                  2
                </Button>
                <Button
                  className={`${styles.minusBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                </Button>
                <Button
                  className={`${styles.pluBtn} ${styles.buttonHover}`}
                  variant='outline'
                >
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.quickOverviewContainer}>
              <h6>Quick Overview</h6>
              <div className={styles.quickOverwiew}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
                tempora molestiae natus consequatur inventore similique quas, vero
                numquam, corporis quod asperiores quae quasi explicabo.
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.storage}>
              <div className={styles.availability}>
                <div>
                  <strong>Availability:</strong>
                </div>
                <div>in stock</div>
              </div>
              <div className={styles.category}>
                <div>
                  <strong>Category:</strong>
                </div>
                <div>Furniture</div>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.socialMedia}>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.facebook}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.facebookIcon}`}
                  icon={faFacebookF}
                ></FontAwesomeIcon>
                Share
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.googlePlus}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.googlePlusIcon}`}
                  icon={faGooglePlusG}
                ></FontAwesomeIcon>
                Google+
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.twitter}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.twitterIcon}`}
                  icon={faTwitter}
                ></FontAwesomeIcon>
                Tweet
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.pinterest}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.pinterestIcon}`}
                  icon={faPinterestP}
                ></FontAwesomeIcon>
                Share
              </Button>
              <Button
                noHover
                className={`${styles.socialMediaBtn} ${styles.linkedin}`}
                variant='outline'
              >
                <FontAwesomeIcon
                  className={`${styles.socialMediaIcon} ${styles.linkedInIcon}`}
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  closePopup: PropTypes.func,
  oldPrice: PropTypes.number,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  id: PropTypes.string,
};

export default ProductPopup;
