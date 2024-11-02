'use client';

import { useEffect, useState } from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderContent, NavigationItem } from '@/components/Header/header.interface';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlinePerson } from 'react-icons/md';

const Header = () => {
  const [headerContent, setHeaderContent] = useState<HeaderContent | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchHeaderContent = async () => {
      try {
        const response = await fetch('/headerContent.json');
        if (!response.ok) throw new Error('Error fetching header content');
        const data: HeaderContent = await response.json();
        setHeaderContent(data);
      } catch (error) {
        console.error('Error fetching header content:', error);
      }
    };
    fetchHeaderContent();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!headerContent) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
        isScrolled ? 'bg-black bg-opacity-70 shadow-lg' : 'bg-transparent'
      }`}
    >
      {!isScrolled && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent)',
            zIndex: -1,
          }}
        />
      )}

      <div className="flex items-center justify-center py-4 text-white space-x-10">
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>
        <nav className="flex items-center space-x-10">
          {headerContent.navigation.map((item: NavigationItem) => (
            <Link key={item.label} href={item.href} className="text-lg hover:text-lime-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-6 text-lg">
          <FaPhoneAlt className="text-2xl mr-2 text-lime-500" />
          <MdOutlinePerson className="text-3xl text-lime-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
