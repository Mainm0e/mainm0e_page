"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

function getNavStyle(scrollPosition: number, hidden: boolean): string {
  const baseStyle = "navbar md:px-40 fixed top-0 z-20 left-0 right-0 transition duration-500 ease";
  
  if (!hidden || scrollPosition > 400) {
    return `${baseStyle} bg-primary`;
  } else {
    return `${baseStyle} bg-primary-60`;
  }
}

function Navbar(props: { hidden: boolean }) {
  const window = globalThis.window;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [path, setPath] = useState("/");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Set initial state on the client side
    setScrollPosition(window?.scrollY || 0);
    setPath(window?.location.pathname || "/");
  }, []); // Empty dependency array ensures it runs only once after initial render

  useEffect(() => {
    const handleScroll = () => {
      setPath(window?.location.pathname || "/");
      setScrollPosition(window?.scrollY || 0);
    };

    window?.addEventListener("scroll", handleScroll);

    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const stateHandler = (path: string) => {
    setPath(path);
  };

  const isTablet = useMediaQuery("(max-width: 768px)");
  const navStyle = getNavStyle(scrollPosition, props.hidden);

  const toggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };
  // for navbar can see tru

  return (
    <>
      <nav className={navStyle}>
        <div className="flex-1">
          <Link
            className="text-lg text-text-primary font-bold md:py-0 py-4"
            href={"/"}
            onClick={() => stateHandler("/")}
          >
            Mainm0e
          </Link>
        </div>
        {isTablet ? (
          // Render options button or menu here
          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost"
              onClick={toggleOptions}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            {showOptions && (
              <ul className="menu menu-vertical px-1 absolute top-16 right-5 bg-primary">
                <li>
                  <Link
                    href={"/"}
                    className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                    onClick={() => stateHandler("/")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#introduction"}
                    className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                    onClick={() => stateHandler("/#introduction")}
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#services"}
                    className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                    onClick={() => stateHandler("/#services")}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#contact"}
                    className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                    onClick={() => stateHandler("/#contact")}
                  >
                    Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#contact_form"}
                    className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                    onClick={() => stateHandler("/#contact_form")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        ) : (
          // Render regular navigation links here
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href={"/"}
                  className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                  onClick={() => stateHandler("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/#introduction"}
                  className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                  onClick={() => stateHandler("/#introduction")}
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  href={"/#services"}
                  className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                  onClick={() => stateHandler("/#services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/#contact"}
                  className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                  onClick={() => stateHandler("/#contact")}
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link
                  href={"/#contact_form"}
                  className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
                  onClick={() => stateHandler("/#contact_form")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
