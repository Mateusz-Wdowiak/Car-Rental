'use client';
import Image from 'next/image';
import homepage1 from '@/public/homepage1.jpg';
import Button from '../Button/Button';
import homepageContent from '@/public/homepageContent.json';
import CarTypeBox from '@/components/CarTypeBox/CarTypeBox';
import Infobox from '@/components/InfoBox/InfoBox';
import { FaWpforms } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { BsPersonFillCheck } from 'react-icons/bs';

const Homepage = () => {

  const iconMap: { [key: string]: React.ReactNode } = {
    FaWpforms: <FaWpforms />,
    FiClock: <FiClock />,
    BsPersonFillCheck: <BsPersonFillCheck />,
  };

  return (
    <>
      <section className="h-screen flex flex-col relative">
        <div className="relative w-full overflow-hidden">
          <Image
            src={homepage1}
            alt="Descriptive Alt Text"
            className="object-cover object-center w-full h-full"
          />
          <div
            className="absolute inset-x-0 bottom-0 flex justify-evenly items-center text-white p-4 bg-black bg-opacity-40">
            <h1 className="text-3xl font-bold">WYPOŻYCZ AUTO IDEALNE DLA CIEBIE !</h1>
            <Button className="bg-lime-500 text-black px-4 py-3 rounded-lg hover:bg-lime-600">Zobacz naszą
              ofertę</Button>
          </div>
        </div>
      </section>
      <section className="relative bg-cover min-h-screen h-auto" style={{ backgroundImage: 'url(\'/road.jpg\')' }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="flex flex-col items-center relative z-10 p-4 max-w-2xl mx-auto">
          <h2 className="text-4xl text-lime-500 my-10">Wybierz coś dla siebie!</h2>
          <div className="flex flex-col gap-4 w-full">
            {homepageContent.carCategories.map((category, index) => (
              <CarTypeBox
                key={category.title}
                title={category.title}
                img={category.img}
                desc={category.description}
                className={`my-5 rounded-lg shadow-md p-4 transition-transform ${
                  index % 2 === 0 ? 'transform translate-x-72' : 'transform -translate-x-72'
                }`}
              />
            ))}
          </div>
          <Button className="bg-lime-500 text-black px-4 py-3 rounded-lg hover:bg-lime-600 my-4">
            Zobacz wszystkie samochody
          </Button>
        </div>
      </section>
      <section className="flex flex-col min-h-96 justify-center items-center bg-red-50 pb-28">
        <h2 className="text-black font-bold text-3xl my-10">Jak to działa ?</h2>
        <div className="flex justify-center items-center w-100">
          {homepageContent.infoBoxes.map((infobox, index) => (
            <Infobox
              className="min-h-80 w-1/4 bg-white rounded-xl mx-5"
              key={index}
              icon={iconMap[infobox.icon]}
              description={infobox.description}
              title={infobox.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;
