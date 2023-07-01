import React, { Component } from 'react'

import book_img from '../../assets/book.png';
import img_card_1 from '../../assets/b1.png';
import img_card_2 from '../../assets/b2.png';
import qr from '../../assets/qr.png';
import author from '../../assets/author.png';

import styles from './Main.module.css';

class Main extends Component {
  render() {
    return (
      <><div className={styles.welcome}>
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
        <div className={styles.author}>
          <h1>The Author’s Book</h1>
          <div className={styles.line_author}></div>
          <div className={styles.author_books}>
            <div className={styles.book_card}>
              <img src={img_card_1} className={styles.img_card} alt="img-card" />
              <div className={styles.col_book_info}>
                <h2>Atomic One’s</h2>
                <h3>$ 13.84 USD
                </h3>
                <h4>As the book contains theoretical content as well as solved questions.</h4>
                <div className={styles.type_book}>
                  <div className={styles.circle}></div>
                  <p>Printed Book</p>
                </div>
                <div className={styles.btn3}>Order now</div>
              </div>
            </div>
            <div className={styles.book_card}>
              <img src={img_card_2} className={styles.img_card} alt="img-card" />
              <div className={styles.col_book_info}>
                <h2>The Dark Light</h2>
                <h3>$ 86.11 USD
                </h3>
                <h4>As the book contains theoretical content as well as solved questions.</h4>
                <div className={styles.type_book}>
                  <div className={styles.circle}></div>
                  <p>Printed Book</p>
                </div>
                <div className={styles.btn3}>Order now</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about_author}>
          <div className={styles.image_author}>
          <img src={author} className={styles.image} alt="author" />
              <div className={styles.img_border}></div>
          </div>
          <div className={styles.about_author_info}>
            <h1>About the Author</h1>
            <div className={styles.line_about_author}></div>
            <h2>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with
              readers, where we discover new writers, where children get hooked on the thrill of reading that can last
              a lifetime.</h2>
            <div className={styles.about_row}>
              <div className={styles.about_card}>
                <div className={styles.about_card_info}>
                  <h3>02</h3>
                  <h4>Book Published</h4>
                </div>
              </div>
              <div className={styles.vert_line}></div>
              <div className={styles.about_card}>
                <div className={styles.about_card_info}>
                  <h3>4.5</h3>
                  <h4>User Reviews</h4>
                </div>
              </div>
              <div className={styles.vert_line}></div>
              <div className={styles.about_card}>
                <div className={styles.about_card_info}>
                  <h3>04</h3>
                  <h4>Best Seller Awards</h4>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.about_box}>
              <img src={qr} className={styles.qr} alt="qr" />
                  <div className={styles.about_box_info}>
                    <h5>John Abraham , Ph.d</h5>
                    <h6>Mail: johnabraham@gmail.com</h6>
                    <h6>Phone: (+2) 123 545 9000</h6>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Main;
