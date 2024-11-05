import contactContent from '@/public/contactContent.json';
import Link from 'next/link';
import Image from 'next/image';
import instaCar1 from '@/public/instaCar1.jpg';
import instaCar2 from '@/public/instaCar2.jpg';
import instaCar3 from '@/public/instaCar3.jpg';
import instaCar4 from '@/public/instaCar4.jpg';
import instaCar5 from '@/public/instaCar5.jpg';
import instaCar6 from '@/public/instaCar6.jpg';

const Instagram = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mt-10">
        <h2 className="text-4xl text-center">{contactContent.instagram.name}</h2>
        <Link href="/">
          <p className="text-lime-600 self-start">{contactContent.instagram.profile}</p>
        </Link>
        <div className="grid grid-cols-1 gap-4 mt-4 mb-10 sm:grid-cols-2 lg:grid-cols-3 w-full px-4">
          <Image src={instaCar1} alt="Car 1"
                 className="w-full h-full object-cover shadow-[0_8px_10px_rgb(0,0,0,1)]" />
          <Image src={instaCar2} alt="Car 2" className="w-full h-full object-cover shadow-[0_8px_10px_rgb(0,0,0,1)]" />
          <Image src={instaCar3} alt="Car 3" className="w-full h-full object-cover shadow-[0_8px_10px_rgb(0,0,0,1)]" />
          <Image src={instaCar4} alt="Car 4" className="w-full h-full object-cover shadow-[0_8px_10px_rgb(0,0,0,1)]" />
          <Image src={instaCar5} alt="Car 5" className="w-full h-full object-cover shadow-[0_8px_10px_rgb(0,0,0,1)]" />
          <Image src={instaCar6} alt="Car 6" className="w-full h-full object-cover shadow-[0_8px_10px_rgb(0,0,0,1)]" />
        </div>
      </div>
    </>
  );
};

export default Instagram;