'use client';

import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full text-white bg-gray-800 py-6 relative">
      <p className="text-center">
        Wszelkie prawa zastrzeżone. <span className="text-lime-600">&#169; 2024 Mateusz Wdowiak.</span>
      </p>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
        <Link href="/"> <FaFacebook className="text-xl mx-2 cursor-pointer mx-4" /></Link>
        <Link href="/"> <FaYoutube className="text-xl mx-2 cursor-pointer mx-4" /></Link>
        <Link href="/"> <FaInstagramSquare className="text-xl mx-2 cursor-pointer mx-4" /></Link>
      </div>
    </div>
  );
};

export default Footer;

