"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-5xl px-4 flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/" className="flex max-w-16  ">
            <Image
              src={"/imgs/w4w_logo_wordless.png"}
              width={500}
              height={500}
              alt="site logo"
            />
            <p className="self-center pl-2">Well4Ward</p>
          </Link>
        </div>
        <nav>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <Link
                className={styles.link.desktop.class}
                key={index}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-2 p-4">
            {menuItems.map((item, index) => (
              <Link
                className={styles.link.mobile.class}
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Our Story",
    link: "/our_story",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const styles = {
  link: {
    desktop: { class: "text-gray-700 hover:text-gray-900" },
    mobile: { class: "block text-gray-700 hover:text-gray-900" },
  },
};

export default Header;
