// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/introduction">Introduction</Link>
      <Link to="/feedback">Feedback</Link>
    </div>
  );
}

export default Header;
