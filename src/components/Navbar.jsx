import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home");



  /* DETECT ACTIVE SECTION */

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {

      let current = "home";

      sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  /* NAV STYLE */

  const navClass = (section) =>
    activeSection === section
      ? "text-red-500 font-bold border-b-2 border-red-500 pb-1 transition"
      : "text-gray-700 hover:text-red-500 transition";



  return (
    <header
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50"
    >

      <div
        className="container mx-auto px-6 py-4 flex items-center justify-between"
      >

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >

          <FaUtensils className="text-3xl text-red-500" />

          <h1 className="text-3xl font-extrabold text-gray-800">
            Foodies
            <span className="text-red-500">.</span>
          </h1>

        </Link>



        {/* NAVIGATION */}

        <nav className="hidden md:flex items-center gap-8 font-medium">

          <a
            href="#home"
            className={navClass("home")}
          >
            Home
          </a>

          <a
            href="#about"
            className={navClass("about")}
          >
            About
          </a>

          <a
            href="#menu"
            className={navClass("menu")}
          >
            Menu
          </a>

          <a
            href="#review"
            className={navClass("review")}
          >
            Review
          </a>

          <a
            href="#contact"
            className={navClass("contact")}
          >
            Contact
          </a>

        </nav>



        {/* AUTH BUTTON */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="border border-red-500 text-red-500 px-5 py-2 rounded-xl hover:bg-red-500 hover:text-white transition"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition shadow-md"
          >
            Sign Up
          </Link>

        </div>

      </div>

    </header>
  );
}