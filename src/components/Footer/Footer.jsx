import React, { Component } from 'react'

import compaines_img_1 from '../../assets/c1.png';
import compaines_img_2 from '../../assets/c2.png';
import compaines_img_3 from '../../assets/c3.png';
import compaines_img_4 from '../../assets/c4.png';

import styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.compaines}>
        <h1>Trusted By The Best</h1>
        <div className={styles.line_compaines}></div>
        <div className={styles.row_companies}>
          <div className={styles.compaines_card}>
            <img src={compaines_img_1} className={styles.compaines_img} alt="compaines_img_1" />
            <h2>Amazen Corp.</h2>
            <h3>They has been helping readers, music lovers, and videophiles find quality material.</h3>
          </div>
          <div className={styles.compaines_card}>
            <img src={compaines_img_2} className={styles.compaines_img} alt="compaines_img_2" />
            <h2>Megan Books</h2>
            <h3>We help physical bookstores manage their overstock to the book inventory.</h3>
          </div>
          <div className={styles.compaines_card}>
            <img src={compaines_img_3} className={styles.compaines_img} alt="compaines_img_3" />
            <h2>Megank</h2>
            <h3>Bookstore serving up the full spectrum of Black literature and wine black books.</h3>
          </div>
          <div className={styles.compaines_card}>
            <img src={compaines_img_4} className={styles.compaines_img} alt="compaines_img_4" />
            <h2>Urban Store</h2>
            <h3>We also carry the latest records, issues of all of your favorite comic books.</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
