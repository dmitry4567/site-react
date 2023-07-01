import React, { Component, useState } from 'react'

import logo from '../../assets/IMAGE.svg';

import styles from './Header.module.css';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <header>
        <Menu></Menu>
        <div className={styles.container}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div className={styles.navbar}>
            <ul className={styles.navbarItems}>
              <li>Home</li>
              <li>About</li>
              <li>Pages</li>
              <li>Contact Us</li>
            </ul>
            <a className={styles.btn}>Order Today</a>
          </div>
        </div>
      </header >
    );
  }
}

export default Header;