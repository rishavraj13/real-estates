"use client"; // if you're on Next.js App Router

import Link from "next/link";
import { useState, useEffect } from "react";
import MainIcon from "../Icons/MainIcon";
import { Sidebar } from "./Sidebar";
import { Button } from "../(ui)/Button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full h-16 fixed top-0 left-0 z-50 transition-colors duration-300 
          ${scrolled ? "bg-black text-white" : "bg-transparent text-black"}
        `}
      >
        <div className="flex justify-between items-center h-full px-8 w-full 2xl:px-16">
          {/* Logo */}
          <Link href="/">
            <MainIcon />
          </Link>

          {/* Desktop Links */}
          <div className="text-lg">
            <ul className="flex gap-6 uppercase hidden sm:flex">
              <li className="hover:text-red-400">
                <Link href="/home">Home</Link>
              </li>
              <li className="hover:text-red-400">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-red-400">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:text-red-400">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Sidebar toggle for mobile */}
          <div className="sm:hidden">
            <Sidebar />
          </div>
          <div className="flex gap-3 align-middle justify-center">
            <div>
              <Button size="md" variant="primary">
                Signup
              </Button>
            </div>

            <div>
              <Button size="md" variant="primary">
                SignIn
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer so content isn’t hidden */}
      <div className="h-16" />
    </>
  );
}
