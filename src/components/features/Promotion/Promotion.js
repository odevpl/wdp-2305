import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promotion.module.scss';
import { useSelector } from 'react-redux';
import { getPromotionById } from '../../../redux/promotionsRedux';

const Promotion = () => {
  function PromotionData(PromID) {
    return useSelector(state => getPromotionById(PromID));
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={'card ' + styles.card + ' ' + styles.first_card}>
              <div className={'card-body ' + styles.photo}>
                <img
                  className={styles.photo}
                  src={PromotionData('1').source}
                  alt='Promotion'
                />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className={'card ' + styles.card}>
                <div className={'card-body ' + styles.photo}>
                  <img
                    className={styles.photo}
                    src={PromotionData('2').source}
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
                    src={PromotionData('3').source}
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
};

Promotion.propTypes = {
  promotions: PropTypes.string,
};

export default Promotion;
