import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={`d-flex justify-content-between align-items-center p-3 ${styles.footer}`}>
      <div className="d-flex align-items-center">
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <span className="ml-2">© 2024 Nouvellie</span>
      </div>
      <div>
        <Link href="https://www.instagram.com/nouvellie" legacyBehavior>
          <a className="mr-3" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/rocuant-roberto" legacyBehavior>
          <a className="mr-3" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </Link>
        <Link href="https://x.com/rrLitost" legacyBehavior>
          <a className="mr-3" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </Link>
        <Link href="https://github.com/Nouvellie" legacyBehavior>
          <a aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
