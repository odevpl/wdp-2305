import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getItemsPerRow = () => {
    if (viewportWidth >= 1200) {
      return 4;
    } else if (viewportWidth >= 992) {
      return 3;
    } else {
      return 2;
    }
  };

  const itemsPerRow = getItemsPerRow();

  return (
    <div>
      <Header />
      <div className={`container-${itemsPerRow}`}>{children}</div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
