"use client";
import { useState } from "react";
import { NavButton } from "../../../public/Icons/NavButton";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="top-2 right-4 sm:hidden fixed px-4">
        <div className="cursor-pointer" onClick={() => setOpen(true)}>
          <NavButton />
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar with animation */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 sm:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className="absolute top-2 right-4 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <NavButton />
        </div>
        <nav className="mt-16 flex flex-col gap-6 p-6 text-xl uppercase">
          <a href="/About">About</a>
          <a href="/Our work">Our work</a>
          <a href="/Contact us">Contact us</a>
          <a href="/Services">Services</a>
        </nav>
      </div>
    </>
  );
}
