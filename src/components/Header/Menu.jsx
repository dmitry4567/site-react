import React, { useState } from 'react'

import styles from './Header.module.css';

import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);
    return <>
      <button onClick={() => setMenuActive(!menuActive)} className={styles.burger_btn} id="burger">
        <img src={menuActive ? close : menu} alt="menu" />
      </button>
      <nav className={menuActive ? styles.menuActive : styles.menu}>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Pages</ul>
        <ul>Contact Us</ul>
      </nav>
    </>
  }

export default Menu;