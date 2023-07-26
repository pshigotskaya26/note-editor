import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p>Created by Pshihotskaya Tatsiana</p>
        <a
          className="link footer-link__github"
          href="https://github.com/pshigotskaya26"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon icon_github"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
