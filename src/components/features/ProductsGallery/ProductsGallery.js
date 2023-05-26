import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductsGallery.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import GalleryProduct from '../GalleryProduct/GalleryProduct';
import Button from 'react-bootstrap/Button';

const ProductsGallery = () => {
  const productsData = useSelector(getAll);
  const [productData, setProductData] = useState(productsData[0]);
  const [productIndex, setProductIndex] = useState(0);
  const [productsType, setProductsType] = useState('featured');
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles['columns-wrapper'] + ' row'}>
          <div className={styles['left-wrapper'] + ' col-6'}>
            <h3>Furniture gallery</h3>
            <hr />
            <ul className={styles.menu}>
              <li
                name='featured'
                className={productsType === 'featured' ? styles['active'] : ''}
              >
                <p>Featured</p>
              </li>
              <li
                name='top seller'
                className={productsType === 'top seller' ? styles['active'] : ''}
              >
                <p>Top Seller</p>
              </li>
              <li
                name='sale off'
                className={productsType === 'sale off' ? styles['active'] : ''}
              >
                <p>Sale off</p>
              </li>
              <li
                name='top rated'
                className={productsType === 'top rated' ? styles['active'] : ''}
              >
                <p>Top Rated</p>
              </li>
            </ul>
            <GalleryProduct {...productData} />

            <div className={styles.slider}>
              {productsData.map(({ name, id }, index) => (
                <div
                  className={
                    styles['product-img'] +
                    (index === productIndex ? ' ' + styles.visible : '')
                  }
                  key={id}
                >
                  <img
                    className={styles.image}
                    alt={name}
                    src={process.env.PUBLIC_URL + `/images/products/${name}.jpg`}
                  />
                </div>
              ))}
              <button className={styles.prev + ' ' + styles['slide-button']}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
              </button>
              <button className={styles.next + ' ' + styles['slide-button']}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className='col-6'>
            <div className={styles['side-photo']}>
              <div className={styles['text-wrapper']}>
                <h3>
                  {' '}
                  From
                  <span className={styles['text-green']}>$50.80</span>
                  <span className={styles['text-primary']}>Bedroom Bed</span>
                </h3>
                <Button variant='success'>Shop Now</Button>{' '}
              </div>
              <img
                alt='Aenean Ru Bristique 18'
                src={
                  process.env.PUBLIC_URL +
                  `/images/transparent-products/transparent-bed.png`
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductsGallery.propTypes = {};

export default ProductsGallery;
