import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promotion.module.scss';

import { getPromotionById } from '../../../redux/promotionsRedux';

const Promotion = ({ promotions }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className={'card ' + styles.card + ' ' + styles.first_card}>
            <div className={'card-body ' + styles.photo}>
              <img className={styles.photo} src={getPromotionById[0]} alt='Promotion' />
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='row'>
            <div className={'card ' + styles.card}>
              <div className={'card-body ' + styles.photo}>
                <img
                  className={styles.photo}
                  src={`/promotions/2.jpg`}
                  alt='Promotion'
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className={'card ' + styles.card}>
              <div className={'card-body ' + styles.photo}>
                <img
                  className={styles.photo}
                  src={`/promotions/3.jpg`}
                  alt='Promotion'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Promotion.propTypes = {
  promotions: PropTypes.string,
};

export default Promotion;
