import { useState } from "react"
import { NavLink } from "react-router-dom"
import {RiCloseLine} from 'react-icons/ri'
import { HiOutlineMenu } from "react-icons/hi"

import { logo } from "../assets"
import { links } from '../assets/constants'

const NavLinks = ({ handleClick }) => (
  <ul className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2"/>
        {item.name}
      </NavLink> 
    ))}
  </ul>
);

const Sidebar = () => {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return (
    <>
      {/* 웹 일때 */}
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      {/* 모바일일때 메뉴 아이콘 */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 text-white mr-2"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 text-white mr-2"
          />
        )}
      </div>
      {/* 모바일일때 메뉴 */}
      <div
        className={`absolute h-screen top-0  w-2/3
        bg-gradient-to-tl from-white/10 to-[#483d8b]
        backdrop-blur-lg z-10 p-6 md:hidden smooth-transition 
        ${mobileMenuOpen ? "left-0" : "left-full"}`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
}

export default Sidebar