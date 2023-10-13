import React from 'react';
import MainLogo from '../assets/bracelet.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <Link to="/">
            <img style={{ width: '3vw' }} src={MainLogo} alt="" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
