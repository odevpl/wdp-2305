import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MenuBar = ({ children }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 576;
      if (!isSmallScreen && !isListOpen) {
        setIsListOpen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isListOpen]);

  return (
    <div
      className={`${styles.root} ${
        isListOpen && window.innerWidth < 576 ? styles.one : ''
      }`}
    >
      <div className='container pb-xl-0'>
        <div className='row justify-content-center py-2'>
          <div className='col-xl-6 d-flex justify-content-center align-items-center order-1 order-xl-0 pt-xl-0'>
            <ProductSearch />
            <div className={`${styles.iconContainer} d-sm-none`}>
              <a href='#' onClick={toggleList}>
                <FontAwesomeIcon className={styles.icon + 'p-2 m-3'} icon={faBars} />
              </a>
            </div>
          </div>

          <div className={'col-6 justify-content-center ' + styles.menu}>
            {isListOpen && (
              <ul className={styles.list + ' flex-column flex-sm-row'}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/shop/furniture'>Furniture</Link>
                </li>
                <li>
                  <Link to='/shop/chair'>Chair</Link>
                </li>
                <li>
                  <Link to='/shop/table'>Table</Link>
                </li>
                <li>
                  <Link to='/shop/sofa'>Sofa</Link>
                </li>
                <li>
                  <Link to='/shop/bedroom'>Bedroom</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
