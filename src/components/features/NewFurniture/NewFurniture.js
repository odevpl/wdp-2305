import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import SwipeableComponent from '../../common/Swipeable/SwipeableComponent';
import CompareContainer from '../CompareContainer/CompareContainer';

class NewFurniture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewportWidth: window.innerWidth,
      itemsPerRow: 4,
      activePage: 0,
      activeCategory: 'bed',
      fade: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.updateItemsPerRow();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ viewportWidth: window.innerWidth }, () => {
      this.updateItemsPerRow();
    });
  };

  updateItemsPerRow = () => {
    const { viewportWidth } = this.state;
    let itemsPerRow = 4;

    if (viewportWidth >= 1230) {
      itemsPerRow = 4;
    } else if (viewportWidth >= 992) {
      itemsPerRow = 3;
    } else if (viewportWidth >= 767) {
      itemsPerRow = 2;
    } else if (viewportWidth < 767) {
      itemsPerRow = 2;
    }

    this.setState({ itemsPerRow });
  };

  handlePageChange = newPage => {
    this.setState({ fade: true, activePage: newPage }, () => {
      this.setState({ fade: false });
    });
  };

  handleCategoryChange = newCategory => {
    this.setState({ fade: true, activeCategory: newCategory, activePage: 0 }, () => {
      this.setState({ fade: false });
    });
  };

  handleSwipeLeft = () => {
    const { activePage, activeCategory } = this.state;
    const { products } = this.props;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(
      categoryProducts.length / (this.state.itemsPerRow * 2)
    );

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
    const { activeCategory, activePage, itemsPerRow, viewportWidth, fade } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / (itemsPerRow * 2));
    const productsToCompare = products.filter(item => item.compare === true);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            Page {i}
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
                <div className={`col-auto ${styles.heading}`}>
                  <h3>New furniture</h3>
                </div>
                <div className={`col ${styles.menu}`}>
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
                <div className={`col-auto ${styles.dots}`}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div
              className={`${fade ? styles['fade-out'] : ''} ${
                styles['products-view']
              } row`}
            >
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
            {productsToCompare.length > 0 && (
              <CompareContainer productsToCompare={productsToCompare} />
            )}
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
