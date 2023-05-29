import React from 'react';
import styles from './BrandsList.module.scss';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BrandsList = () => {
  const brandsData = useSelector(getAllBrands);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.slider}>
          {brandsData.map(({ name, id }) => (
            <div className={styles['brand-logo']} key={id}>
              <img
                className={styles.image}
                alt={name}
                src={process.env.PUBLIC_URL + `/images/brands/${name}.png`}
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
    </div>
  );
};

export default BrandsList;
