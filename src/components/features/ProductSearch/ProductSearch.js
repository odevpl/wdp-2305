import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  const [category, setCategory] = useState('Select a category');
  const handleDropdownSelect = categoryValue => {
    setCategory(categoryValue);
  };
  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <Dropdown className={styles.dropdown} onSelect={handleDropdownSelect}>
          <Dropdown.Toggle name='' id='' className={styles['dropdown-btn']}>
            {category}{' '}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className={styles['submenu-dropdown']}>
              <Dropdown.Item className={styles['submenu-select']} eventKey='Submenu 1'>
                {' '}
                Submenu 1
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </Dropdown.Item>

              <Dropdown.Menu className={styles.submenu}>
                <Dropdown.Item eventKey='Submenu option 1-1'>
                  Submenu option 1-1
                </Dropdown.Item>
                <Dropdown.Item eventKey='Submenu option 1-2'>
                  Submenu option 1-2
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
            <div className={styles['submenu-dropdown']}>
              <Dropdown.Item className={styles['submenu-select']} eventKey='Submenu 1'>
                {' '}
                Submenu 2
                <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </Dropdown.Item>
              <Dropdown.Menu className={styles.submenu}>
                <Dropdown.Item eventKey='Submenu option 2-1'>
                  Submenu option 2-1
                </Dropdown.Item>
                <Dropdown.Item eventKey='Submenu option 2-2'>
                  Submenu option 2-2
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
            <Dropdown.Item eventKey='Option 3'>Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
