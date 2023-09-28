"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  let window = globalThis.window;
  let defaultscrollPosition = 0;
  let defaultpath = "/";
  if (typeof window !== "undefined") {
    defaultscrollPosition = window.scrollY;
    defaultpath = window.location.pathname;
  }
  const [scrollPosition, setScrollPosition] = useState(defaultscrollPosition);
  const [path, setPath] = useState(defaultpath);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      setPath(window.location.pathname);
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
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

  const styleHandler = () => {
    if (path === "/") {
      if (scrollPosition < 500) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  return (
    <>
      {path !== "/" ? (
        <nav
          className="navbar bg-primary md:px-40 fixed top-0 z-20 left-0 right-0"
          style={{
            backgroundColor: `rgba(86,58,44,1)`,
            transition: "background-color 0.5s ease",
          }}
        >
          <div className="flex-1">
            <span className="text-lg text-text-primary font-bold md:py-0 py-4">
              Mainm0e
            </span>
          </div>
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
        </nav>
      ) : (
        <nav
          className="navbar bg-primary md:px-40 fixed top-0 z-20 left-0 right-0"
          style={{
            backgroundColor: `rgba(86,58,44, ${styleHandler() ? 1 : 0.1})`,
            transition: "background-color 0.5s ease",
          }}
        >
          <div className="flex-1">
            <span className="text-lg text-text-primary font-bold md:py-0 py-4">
              Mainm0e
            </span>
          </div>
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
        </nav>
      )}
    </>
  );
}

export default Navbar;
