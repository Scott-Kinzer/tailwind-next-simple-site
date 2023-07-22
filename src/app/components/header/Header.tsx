import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  setActiveSection: Dispatch<SetStateAction<number>>;
};

const sections = ['Home', 'About', 'Service', 'Contact'];

const Header = ({ setActiveSection }: Props) => (
  <header className="z-2 relative ml-10 mr-6 box-border flex	justify-between pt-10">
    <div>
      <h2 className="text-xl font-bold text-white">
        <a href="/">LOGO</a>
      </h2>
    </div>

    <nav className="flex list-none gap-20 text-white">
      {sections.map((sectionName, i) => {
        return (
          <li
            onClick={() => setActiveSection(i)}
            key={i}
            className="cursor-pointer">
            {sectionName}
          </li>
        );
      })}
    </nav>
  </header>
);

export default Header;
