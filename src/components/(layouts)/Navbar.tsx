import Link from "next/link";
import Image from "next/image";
import { Sidebar } from "./Sidebar";
import { MailMinus } from "lucide-react";
import MainIcon from "../Icons/MainIcon";
// import MainIcon from "../Icons/MainIcon";

export default function Navigation() {
  return (
    <div className="">
      <nav className=" w-full min-h-16 shadow-2xl bg-white">
        <div className="flex justify-between items-center h-full px-8 w-full 2xl:px-16">
          <Link href="/">
            <MainIcon />
          </Link>
          <div className="text-xl  ">
            <ul className="gap gap-6 uppercase hidden sm:flex">
              <div className=" hover:text-red-400">
                <Link href="/Home">Home</Link>
              </div>
              <div className="hover:text-red-400">
                <Link href="/About">About</Link>
              </div>
              <div className="hover:text-red-400">
                <Link href="/Services">Services</Link>
              </div>

              <div className="hover:text-red-400">
                <Link href="/Contact Us">Contact us</Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex ">
        <Sidebar />
      </div>
    </div>
  );
}
