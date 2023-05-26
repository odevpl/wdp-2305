import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.banner}>
          <p className={styles.title}>
            BEDROOM <strong>FURNITURE</strong>
          </p>
          <p className={styles.subtitle}>
            ALWAYS <span>25%</span> OFF OR MORE
          </p>
        </div>
        <div className={styles.menu}>
          <p>
            Home &gt;{' '}
            <span>
              <strong>Furniture</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
