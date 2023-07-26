import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__title">
          <span>Notes</span> manager
        </h1>
      </div>
    </header>
  );
};

export default Header;
