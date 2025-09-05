import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.png";

export default function Navigation() {
  return (
    <div className="">
      <nav className="fixed w-full min-h-16 shadow-2xl bg-white">
        <div className="flex justify-between items-center h-full px-8 w-full 2xl:px-16">
          <Link href="/">
            <Image
              src={Logo}
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
          <div className="text-xl ">
            <ul className="gap gap-6 uppercase hidden sm:flex">
              <Link href="/About">About</Link>

              <Link href="/Our work">Our work</Link>

              <Link href="/Contact us">Contact us</Link>

              <Link href="/Services">Services</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
