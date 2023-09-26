"use client";
import Link from "next/link";
import { use, useEffect ,useState} from "react";



function Navbar() {

  return (

<nav className="navbar bg-primary md:px-40">
  <div className="flex-1">
    <span className="text-lg font-bold md:py-0 py-4">Mainm0e</span>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/"}className="hover:bg-primary">Home</Link></li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href={"/contact"}>contact</Link></li>


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
  );
}

export default Navbar;

