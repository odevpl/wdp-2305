import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

const SwipeableComponent = ({ children, leftAction, rightAction }) => {
  const [touchStartX, setTouchStartX] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (typeof rightAction === 'function') {
        rightAction();
      }
    },
    onSwipedRight: () => {
      if (typeof leftAction === 'function') {
        leftAction();
      }
    },
    onSwipedStart: event => {
      setTouchStartX(event.changedTouches[0].clientX);
    },
    onSwipedEnd: event => {
      const touchEndX = event.changedTouches[0].clientX;
      const touchDiffX = touchStartX - touchEndX;

      if (touchDiffX > 0 && typeof rightAction === 'function') {
        rightAction();
      } else if (touchDiffX < 0 && typeof leftAction === 'function') {
        leftAction();
      }
    },
  });

  useEffect(() => {
    document.addEventListener('touchstart', swipeHandlers.onSwipedStart);
    document.addEventListener('touchend', swipeHandlers.onSwipedEnd);

    return () => {
      document.removeEventListener('touchstart', swipeHandlers.onSwipedStart);
      document.removeEventListener('touchend', swipeHandlers.onSwipedEnd);
    };
  }, [swipeHandlers]);

  return <div {...swipeHandlers}>{children}</div>;
};

SwipeableComponent.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default SwipeableComponent;
