import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Feedback from '../Feedback/Feedback';
import ChatBot from '../../common/ChatBot/ChatBot';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Feedback />
    <ChatBot />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
