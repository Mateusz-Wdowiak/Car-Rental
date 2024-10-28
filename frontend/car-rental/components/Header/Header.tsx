'use client';

import { useEffect, useState } from 'react';
import logo from '../../public/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderContent, NavigationItem } from '@/components/Header/header.interface';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePerson } from 'react-icons/md';


const Header = () => {
  const [headerContent, setHeaderContent] = useState<HeaderContent | null>(null);

  useEffect(() => {
    const fetchHeaderContent = async () => {
      try {
        const response = await fetch('/headerContent.json');
        if (!response.ok) {
          throw new Error('Error');
        }
        const data = await response.json();
        setHeaderContent(data);
        console.log('Header content:', headerContent);
      } catch (error) {
        console.error('Error fetching header content:', error);
      }
    };
    fetchHeaderContent();
  }, []);

  if (!headerContent) return null;

  return (
    <header className=" text-black p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={80} height={80} />
        </div>
        <div className="hidden md:flex items-center text-blue-700 text-lg">
          <span className="flex px-10"><FaPhoneAlt className="text-2xl mr-2" />{headerContent.phoneNumber}</span>
          <MdOutlinePerson className="text-3xl mr-2" />
        </div>
      </div>
      <nav className="mt-2 w-full">
        <ul className="flex justify-center space-x-4">
          {headerContent.navigation.map((item: NavigationItem) => (
            <li key={item.label} className="px-10 text-lg">
              <Link href={item.href} className="hover:text-blue-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

  );
};

export default Header;