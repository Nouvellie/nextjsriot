import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a>
            <img src="/white-aniv.svg" alt="Anivia Ice Phoenix Logo" className={styles.logoImage} />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className={styles.title}>NOUVELLIE.GG</a>
        </Link>
      </div>
      <ul className={styles.navCenter}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Text1</a>
          </Link>
        </li>
        <li>
          <Link href="/" legacyBehavior>
            <a>Text2</a>
          </Link>
        </li>
        <li>
          <Link href="/" legacyBehavior>
            <a>Text3</a>
          </Link>
        </li>
        <li>
          <Link href="/champions" legacyBehavior>
            <a>Champions</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;