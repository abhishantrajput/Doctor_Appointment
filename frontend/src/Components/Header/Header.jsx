import { useEffect, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserImage from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/authContext";
import Logo from "../../assets/MedConnect_Logo.png";

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
  {
    path: "/lobby",
    display: "Meeting",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const { user, role, token } = useContext(authContext);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

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

  useEffect(() => {
    handleStickHeader();

    return () => window.removeEventListener("scroll", handleStickHeader);
  });

  return (
    <header className="header flex items-center" ref={headerRef}>
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
            {user && token ? (
              <div className="">
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-3">
                      <figure className="w-[35px] h-[35px] rounded-full cursor-pointer overflow-hidden">
                        <img src={user?.photo} alt="" className="" />
                      </figure>

                      <h2>{user?.name}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="bg-primaryColor px-[18px] py-[7px] text-[white] font-[600] h-[44px] tracking-widest flex items-center justify-center cursor-pointer rounded-[30px] hover:outline hover:bg-white hover:text-primaryColor outline-[1px] outline-primaryColor  ">
                  login{" "}
                </button>
              </Link>
            )}

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
