import React from 'react';
import styles from './Blog.module.scss';
import { getBlog } from '../../../redux/blogRedux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faFolder,
  faArchive,
} from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const posts = useSelector(state => getBlog(state));
  console.log(posts);

  return (
    <div className={`container ${styles.root}`}>
      {posts.map(post => (
        <div className='row' key={post.id}>
          <div className='col-md-9'>
            <div className={styles.blogBox}>
              <h5>{post.title}</h5>
              <img src={`${process.env.PUBLIC_URL}${post.image}`} alt='photo' />
              <p>{post.description}</p>
              <div className={styles.iconsContainer}>
                <div>
                  <span>
                    <FontAwesomeIcon className={styles.icons} icon={faUser} /> User{' '}
                  </span>
                  <span>
                    <FontAwesomeIcon className={styles.icons} icon={faCalendar} />{' '}
                    Calendar{' '}
                  </span>
                  <span>
                    <FontAwesomeIcon className={styles.icons} icon={faFolder} /> Folder{' '}
                  </span>
                </div>
                <div>
                  <a href='#'>Read More...</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className={styles.inputContainer}>
              <input placeholder='Search...' type={'text'}></input>
            </div>
            <div className={styles.recentPostsContainer}>
              <h5 className={styles.recentPostsTitle}>Recent Posts</h5>
              <ul className={styles.postList}>
                <li>
                  <a>Post 12</a>
                </li>
                <li>
                  <a>Post 2</a>
                </li>
                <li>
                  <a>Post 1</a>
                </li>
                <li>
                  <a>Post</a>
                </li>
              </ul>
            </div>
            <div className={styles.recentComment}>
              <h5 className={styles.recentPostsTitle}>Recent Comment</h5>
            </div>
            <div className={styles.archives}>
              <h5 className={styles.ArchivesTitle}>Archives</h5>
              <span>
                <FontAwesomeIcon className={styles.icons} icon={faArchive} /> June 2023{' '}
              </span>
            </div>
            <div className={styles.categories}>
              <h5 className={styles.ArchivesTitle}>Categories</h5>
              <span>
                <FontAwesomeIcon className={styles.icons} icon={faFolder} /> June 2023{' '}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
