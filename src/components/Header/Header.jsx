import React, { Component } from 'react'
import $ from 'jquery';

import logo from '../../assets/IMAGE.svg';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';

import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header>
        <button className={styles.burger_btn} id="burger">
          <div className={styles.btn_open}>
            <img src={menu} alt="menu" />
          </div>
          <div className={styles.btn_close}>
            <img src={close} alt="close" />
          </div>
        </button>
        <nav className={styles.menu}>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Pages</ul>
          <ul>Contact Us</ul>
        </nav>
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