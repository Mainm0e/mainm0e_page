"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

function getNavStyle(scrollPosition: number, hidden: boolean): string {
  if (!hidden) {
    return "navbar md:px-40 fixed top-0 z-20 left-0 right-0 bg-primary transition duration-500 ease";
  } else {
    return scrollPosition > 400
      ? "navbar md:px-40 fixed top-0 z-20 left-0 right-0 bg-primary transition duration-500 ease"
      : "navbar md:px-40 fixed top-0 z-20 left-0 right-0 bg-primary-60 transition duration-500 ease";
  }
}

function Navbar(props: { hidden: boolean }) {
  let window = globalThis.window;
  let defaultscrollPosition = 0;
  let defaultpath = "/";
  if (typeof window !== "undefined") {
    defaultscrollPosition = window.scrollY;
    defaultpath = window.location.pathname;
  }
  const [scrollPosition, setScrollPosition] = useState(defaultscrollPosition);
  const [path, setPath] = useState(defaultpath);
  let navStyle = getNavStyle(scrollPosition, props.hidden);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      setPath(window.location.pathname);
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      navStyle = getNavStyle(scrollPosition, props.hidden);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [defaultpath]);

  const stateHandler = (path: string) => {
    defaultpath = path;
    setPath(path);
  };
  const isTablet = useMediaQuery("(max-width: 768px)");

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

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
