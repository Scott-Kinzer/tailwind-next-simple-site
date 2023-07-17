import React from 'react';

const Header = () => {
  return (
    <header className="z-2 relative ml-10 mr-6 box-border flex	justify-between pt-10">
      <div>
        <h2 className="text-xl font-bold text-white">
          <a href="/">LOGO</a>
        </h2>
      </div>

      <nav className="flex list-none gap-20 text-white">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Service</li>
        <li className="cursor-pointer">Contact</li>
      </nav>
    </header>
  );
};

export default Header;
