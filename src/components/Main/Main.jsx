import React, { Component } from 'react'

import book_img from '../../assets/book.png';

import styles from './Main.module.css';

class Main extends Component {
  render() {
    return (
      <div className={styles.welcome}>
        <div className={styles.welcome_text}>
          <div className={styles.line_text}>
            <div className={styles.line}></div>
            <p>Welcome to Pages!!!</p>
          </div>
          <h1>Your Books From</h1>
          <h1>The Best Writer.</h1>
          <h2 id={styles.text}>We believe that reading books are essential to a healthy culture.</h2>
          <h2>They’re where authors can connect with readers.</h2>
          <div className={styles.buttons}>
            <a className={styles.btn2}>Order Today</a>
            <div className={styles.col_read_free}>
              <p>Read Free demo</p>
              <div className={styles.line_read_free}></div>
            </div>
          </div>
          <div className={styles.welcome_info}>
            <div className={styles.card}>
              <div className={styles.circle}></div>
              <div className={styles.welcome_info_card}>
                <h1>Pages:</h1>
                <h2>250 pages</h2>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.circle}></div>
              <div className={styles.welcome_info_card}>
                <h1>Length:</h1>
                <h2>10 hours</h2>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.circle}></div>
              <div className={styles.welcome_info_card}>
                <h1>Rating:</h1>
                <h2>4/5</h2>
              </div>
            </div>
          </div>
        </div>
        <img class={styles.book_img} src={book_img} alt="book-img" />
      </div>
    );
  }
}

export default Main;
