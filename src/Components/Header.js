import { useContext, useState } from "react";
import logo from "../assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import { UserDataContext } from "../context/UserContext";
import useVerifyToken from "../hooks/useVerifyToken";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import LOGO2 from "../assets/SOFTTRAILS.svg";


const Header = () => {
  const navigate = useNavigate();
  useVerifyToken();
  const url = window.location.pathname;
  const { user } = useContext(UserDataContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const goToDashboard = () => {
    navigate("/user-dashboard");
  };

  return (
    <header className="sticky top-0 bg-white px-4 md:px-8 lg:px-5 shadow-lg z-50 w-full h-auto md:w-full md:h-auto sm:w-4/5 sm:h-full">
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img src={LOGO2} alt="Logo" className="rounded-full " />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-black">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          <ScrollIntoView selector="#home" alignToTop={true}>
            <Link
              className="text-sm md:text-base text-black hover:text-blue-600 transition duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Home
            </Link>
          </ScrollIntoView>
          {/* <ScrollIntoView selector="#services" alignToTop={true}>
            <Link
              className="text-sm md:text-base text-black hover:text-blue-600 transition duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Services
            </Link>
          </ScrollIntoView> */}
          <ScrollIntoView selector="#about" alignToTop={true}>
            <Link
              className="text-sm md:text-base text-black hover:text-blue-600 transition duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              About
            </Link>
          </ScrollIntoView>
          <ScrollIntoView selector="#contact-us" alignToTop={true}>
            <Link
              className="text-sm md:text-base text-black hover:text-blue-600 transition duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Us
            </Link>
          </ScrollIntoView>
        </nav>

        {/* Buttons Section */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => navigate("/partner")}
            className="border-2 border-black px-4 py-1 md:px-6 md:py-2 rounded-lg text-black text-sm md:text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Become a Partner
          </button>
          {localStorage.getItem("higherIndia") ? (
            <button
              onClick={goToDashboard}
              className="bg-[#005AE6] flex items-center border-2 border-[#005AE6] px-4 py-1 md:px-6 md:py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-sm md:text-base"
            >
              Welcome {user?.customer_name} <FaArrowRight className="ml-1"/>
            </button>
          ) : url === "/auth/login" || url === "/auth/signup" ? null : (
            <>
              <button
                onClick={() => navigate("/auth/login")}
                className="border-2 border-black px-4 py-1 md:px-6 md:py-2 rounded-lg text-black text-sm md:text-base"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Login
              </button>
              <button
                onClick={() => navigate("/auth/signup")}
                className="bg-[#005AE6] border-2 border-[#005AE6] px-4 py-1 md:px-6 md:py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-sm md:text-base"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg">
          <nav className="flex flex-col gap-4 py-4">
            <ScrollIntoView selector="#home" alignToTop={true}>
              <Link
                className="text-sm text-black hover:text-blue-600 transition duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Home
              </Link>
            </ScrollIntoView>
            <ScrollIntoView selector="#services" alignToTop={true}>
              <Link
                className="text-sm text-black hover:text-blue-600 transition duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Services
              </Link>
            </ScrollIntoView>
            <ScrollIntoView selector="#about" alignToTop={true}>
              <Link
                className="text-sm text-black hover:text-blue-600 transition duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                About
              </Link>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact-us" alignToTop={true}>
              <Link
                className="text-sm text-black hover:text-blue-600 transition duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Contact Us
              </Link>
            </ScrollIntoView>
          </nav>
          <div className="flex flex-col gap-4 items-center py-4">
            <button
              onClick={() => navigate("/partner")}
              className="border-2 border-black px-4 py-2 rounded-lg text-black text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Become a Partner
            </button>
            {localStorage.getItem("higherIndia") ? (
              <button
                onClick={goToDashboard}
                className="bg-[#005AE6] border-2 border-[#005AE6] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-sm"
              >
                Welcome {user?.customer_name} <FaArrowRight />
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/auth/login")}
                  className="border-2 border-black px-4 py-2 rounded-lg text-black text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/auth/signup")}
                  className="bg-[#005AE6] border-2 border-[#005AE6] px-4 py-2 rounded-lg text-white hover:bg-blue-700 transition duration-300 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
