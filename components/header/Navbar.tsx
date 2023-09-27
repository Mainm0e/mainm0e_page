"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    console.log("path", path);
    const handleScroll = () => {
      // Get the current scroll position
      setPath(window.location.pathname);
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the top of the viewport to trigger animations
    });

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [defaultpath]);
  
  const stateHandler = (path:string) => {
    defaultpath = path;
    setPath(path);
  };

  const styleHandler = () => {
    console.log("scrollPosition", path)
   if (path === "/") {
      if (scrollPosition < 500) {
        return false ;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };

  return (
    <>
    {(path !== "/") ? (

<nav
className="navbar bg-primary md:px-40 fixed top-0 z-20 left-0 right-0"
style={{
  backgroundColor: `rgba(86,58,44,1)`,
  transition: "background-color 0.5s ease",
}}
data-aos="fade-down"
data-aos-duration="800"
data-aos-offset="0"
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
        onClick={() => stateHandler('/')}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        href={"/about"}
        className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
        onClick={() => stateHandler('/about')}
      >
        About
      </Link>
    </li>
    <li>
      <Link
        href={"/contact"}
        className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
        onClick={() => stateHandler('/contact')}
      >
        contact
      </Link>
    </li>

    {/*  <li>
<details>
  <summary>
    Parent
  </summary>
  <ul className="p-2 bg-base-100">
    <li><a>Link 1</a></li>
    <li><a>Link 2</a></li>
  </ul>
</details>
</li> */}
  </ul>
</div>
</nav>
    ): (
      <nav
      className="navbar bg-primary md:px-40 fixed top-0 z-20 left-0 right-0"
      style={{
        backgroundColor: `rgba(86,58,44, ${styleHandler() ? 1 : 0.1})`,
        transition: "background-color 0.5s ease",
      }}
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-offset="0"
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
              onClick={() => stateHandler('/')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
              onClick={() => stateHandler('/about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="text-text-primary rounded-none hover:bg-primary hover:text-text-hover"
              onClick={() => stateHandler('/contact')}
            >
              contact
            </Link>
          </li>

          {/*  <li>
      <details>
        <summary>
          Parent
        </summary>
        <ul className="p-2 bg-base-100">
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
        </ul>
      </details>
    </li> */}
        </ul>
      </div>
    </nav>
    )
    }
    </>
  );
}

export default Navbar;
