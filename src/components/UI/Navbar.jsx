import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, menuIcon, closeIcon } from "../../assets";
import { navLinks, instagramLogo } from "../../constants";
import style from "../../style";

const Navbar = ({ isHomePage }) => {
  const [toggle, setToggle] = useState(false);

  const firstHalf = navLinks.filter(
    (nav, index) => index < navLinks.length / 2
  );
  const secondHalf = navLinks.filter(
    (nav, index) => index >= navLinks.length / 2
  );

  return (
    <nav
      className={`${
        isHomePage ? "hidden" : "sm:flex grid grid-cols-3"
      } lg:w-[67.5%] w-[85%] sm:justify-between items-center py-8 mx-auto 
      sm:border-b sm: border-transparent-white bg-transparent`}
    >
      <a href={instagramLogo.link}>
        <img
          src={instagramLogo.img}
          alt={instagramLogo.id}
          className='w-[24px] h-[24px] sm:mr-10 mr-auto'
        />
      </a>

      <ul className='list-none sm:flex hidden justify-between items-center flex-1'>
        {firstHalf.map((nav, index) => (
          <li key={nav.id} className={`${style.textMenu} font-semibold`}>
            <NavLink to={`${nav.id}`}>
              {({ isActive }) => (
                <span
                  className={`${
                    isActive
                      ? "text-[#CDAA7D] border-b border-[#CDAA7D]"
                      : undefined
                  }`}
                >
                  {nav.title}
                </span>
              )}
            </NavLink>
          </li>
        ))}
        <li>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-10 h-10 sm:mx-2 lg:mx-10' />
          </Link>
        </li>
        {secondHalf.map((nav, index) => (
          <li key={nav.id} className={`${style.textMenu} font-semibold`}>
            <NavLink to={`${nav.id}`}>
              {({ isActive }) => (
                <span
                  className={`${
                    isActive
                      ? "text-[#CDAA7D] border-b border-[#CDAA7D]"
                      : undefined
                  }`}
                >
                  {nav.title}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <img
        src={logo}
        alt='logo'
        className='sm:hidden w-10 h-10 cursor-pointer mx-auto'
      />
      <img
        src={toggle ? closeIcon : menuIcon}
        alt={toggle ? "close" : "menu"}
        className='w-[50] h-[50] sm:ml-10 cursor-pointer ml-auto'
        onClick={() => setToggle((prev) => !prev)}
      />
    </nav>
  );
};

export default Navbar;
