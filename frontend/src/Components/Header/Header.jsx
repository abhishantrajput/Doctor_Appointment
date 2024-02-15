import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import UserImage from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

import Logo from "../../assets/MedConnect_Logo.png"

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Service",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = ()=> menuRef.current.classList.toggle("show__menu")

  const handleStickHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };


  useEffect(()=>{
    handleStickHeader();

    return ()=> window.removeEventListener('scroll',handleStickHeader)
  })

  return (
    <header className="header flex items-center" ref={headerRef} >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* MedConnect Website Logo */}

          <div>
            <img src={Logo} alt="Website Logo" width={200} />
          </div>

          {/* Menu */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {" "}
                    {link.display}{" "}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to={"/"}>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={UserImage} alt="User Image" />
                </figure>
              </Link>
            </div>

            <Link to={"/login"}>
              <button className="bg-primaryColor px-[18px] py-[7px] text-[white] font-[600] h-[44px] tracking-widest flex items-center justify-center cursor-pointer rounded-[30px] hover:outline hover:bg-white hover:text-primaryColor outline-primaryColor  ">
                login{" "}
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
