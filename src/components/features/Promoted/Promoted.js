import React from 'react';

import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './Promoted.module.scss';
import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';

import { getAllPromoted, getDeals } from '../../../redux/promotedRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Promoted = () => {
  const promoted = useSelector(state => getAllPromoted(state));
  const deals = useSelector(state => getDeals(state));
  const dots = [];
  const activeDeal = 0;
  for (let i = 0; i < promoted.length; i++) {
    dots.push(
      <li key={i}>
        <a className={i === activeDeal && styles.active}>page {i}</a>
      </li>
    );
  }
  return (
    <>
      <div className={'container ' + styles.container}>
        <div className={'col-4 ' + styles.leftColumn}>
          <div className={styles.hotDeals}>
            <span>Hot Deals</span>
            <ul className={styles.dots}>{dots}</ul>
          </div>
          <div className={styles.hoverContainer}>
            <div className={styles.hoverCart}>
              <Button variant='small' className={styles.addToCartBtn}>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                <span>ADD TO CART</span>
              </Button>
            </div>
            <div className={styles.hoverDots}>
              <div className={styles.hoverDot}>
                <span>11</span>DAYS
              </div>
              <div className={styles.hoverDot}>
                <span>23</span>HRS
              </div>
              <div className={styles.hoverDot}>
                <span>31</span>MINS
              </div>
              <div className={styles.hoverDot}>
                <span>20</span>SECS
              </div>
            </div>
          </div>
          <div className={styles.product}>
            {promoted.slice(activeDeal, activeDeal + 1).map(product => (
              <div key={product.id}>
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </div>
        <div className={'col-8 ' + styles.rightColumn}>
          {deals.map(deal => (
            <div className={styles.dealContainer} key={deal.id}>
              <img
                alt={deal.name}
                src={process.env.PUBLIC_URL + `/images/deals/${deal.image}.jpg`}
              />
              <div className={styles.deal}>
                <h1>
                  {deal.title1}
                  <span>{deal.title2}</span>
                  <p>{deal.subtitle}</p>
                </h1>
                <button>Shop Now</button>
              </div>
              <div className={styles.arrows}>
                <button className={styles.arrowLeft}>&#60;</button>
                <button className={styles.arrowRight}>&#62;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Promoted;
