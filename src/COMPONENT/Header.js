import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className="header">
      <div className="One-Contain">
        <ul className="pages">
          <li className="header-li"><a className="header-a" href="index.html">Home</a></li>
          <li className="header-li"><a className="header-a" href="about.html">About us</a></li>
          <li className="header-li"><a className="header-a" href="page.html">Demo Page</a></li>
          <li className="header-li"><a className="header-a" href="contact.html">Contact Page</a></li>
        </ul>
      </div>
      <div className="One-Contain">
        <form className="header-form" action="#">
          <p className="header-form-p">Search: </p>
          <input className="header-input" type="text" name="s" id="s" value="Search" />
        </form>
      </div>

    </div>
  );

};

export default Header;     