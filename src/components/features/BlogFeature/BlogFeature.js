import React from 'react';
import styles from './BlogFeature.module.scss';

import BlogBox from '../../common/BlogBox/BlogBox';

const BlogFeature = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>LATEST BLOG</h3>
            </div>
            <div className={'col ' + styles.menu}></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a href='#' />
                </li>
                <li>
                  <a href='#' />
                </li>
                <li>
                  <a href='#' />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={'row ' + styles.box}>
          <BlogBox />
          <BlogBox />
          <BlogBox />
        </div>
      </div>
    </div>
  );
};

export default BlogFeature;
