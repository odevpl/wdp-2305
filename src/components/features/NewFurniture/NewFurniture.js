import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import SwipeableComponent from '../../common/Swipeable/SwipeableComponent';

const NewFurniture = ({ categories = [], products = [] }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth >= 1230) {
      setItemsPerRow(4);
    } else if (viewportWidth >= 992) {
      setItemsPerRow(3);
    } else if (viewportWidth >= 767) {
      setItemsPerRow(2);
    }
  }, [viewportWidth]);

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
    setActivePage(0);
  };

  const handleSwipeLeft = () => {
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    if (activePage < pagesCount - 1) {
      setActivePage(prevActivePage => prevActivePage + 1);
    }
  };

  const handleSwipeRight = () => {
    if (activePage > 0) {
      setActivePage(prevActivePage => prevActivePage - 1);
    }
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / (itemsPerRow * 2));

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          Page {i}
        </a>
      </li>
    );
  }

  return (
    <SwipeableComponent leftAction={handleSwipeRight} rightAction={handleSwipeLeft}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={`col-auto ${styles.heading}`}>
                <h3>New furniture</h3>
              </div>
              <div className={`col ${styles.menu}`}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`col-auto ${styles.dots}`}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={`${styles['products-view']} row`}>
            {categoryProducts
              .slice(
                activePage * (itemsPerRow * 2),
                (activePage + 1) * (itemsPerRow * 2)
              )
              .map(item => (
                <div key={item.id} className={`col-${12 / itemsPerRow}`}>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </SwipeableComponent>
  );
};

NewFurniture.propTypes = {
  categories: PropTypes.array,
  products: PropTypes.array,
};

export default NewFurniture;
