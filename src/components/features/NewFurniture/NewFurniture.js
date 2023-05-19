import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import SwipeableComponent from '../../common/Swipeable/SwipeableComponent';

class NewFurniture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      activeCategory: 'bed',
    fade: false,
    };
  }

  handlePageChange = newPage => {
    this.setState({ fade: true });
    this.setState({ activePage: newPage, fade: false });
  };

  handleCategoryChange = newCategory => {
    this.setState({ fade: true });
    this.setState({ activeCategory: newCategory, fade: false, activePage: 0 });
  };

  handleSwipeLeft = () => {
    const { activePage, activeCategory } = this.state;
    const { products } = this.props;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    if (activePage < pagesCount - 1) {
      this.setState(prevState => ({ activePage: prevState.activePage + 1 }));
    }
  };

  handleSwipeRight = () => {
    const { activePage } = this.state;
    if (activePage > 0) {
      this.setState(prevState => ({ activePage: prevState.activePage - 1 }));
    }
  };

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <SwipeableComponent
        leftAction={this.handleSwipeRight}
        rightAction={this.handleSwipeLeft}
      >
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory ? styles.active : ''}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div
            className={`${this.state.fade ? styles['fade-out'] : ''} ${
              styles['products-view']
            } row`}
          >
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-12 col-sm-4 col-lg-3'>
                <ProductBox {...item} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </SwipeableComponent>
    );
  }
  }


NewFurniture.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stars: PropTypes.number.isRequired,
      promo: PropTypes.string.isRequired,
      newFurniture: PropTypes.bool.isRequired,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
