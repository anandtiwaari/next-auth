"use client";
import React from "react";
import Link from "next/link";
import { Logout } from "./utils/sessions";
import { session } from "./utils/sessions";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const handleLogout = () => {
    console.log("show the session here");
    Logout(null);
    router.push("/signin");
  };
  console.log(session, "show the changes in the session");
  return (
    <div>
      <header>
        <nav>
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
          <Link href="/news" className="nav-link">
            News
          </Link>
          <button onClick={handleLogout}>LogOut</button>

          {/* <Link href="#website" className="nav-link">
            Website
          </Link> */}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
