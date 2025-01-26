import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkGreen text-gray py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <Link href="/bylaws" className="hover:underline">
            Bylaws
          </Link>
          <Link href="/sitemap" className="hover:underline">
            Sitemap
          </Link>
          <Link href="/board_members" className="hover:underline">
            Board Members
          </Link>
        </div>
        <p className="text-center mt-4 text-gray-400">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
