'use client';
import Image from 'next/image';
import img from '../../public/trip.jpg';

const Homepage = () => {
  return (
    <section className="h-96 flex flex-col">
      <div className="relative w-full overflow-hidden">
        <Image
          src={img}
          alt="Descriptive Alt Text"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold">Tytuł</h1>
          <div className="mt-4">
            <div>chuj</div>
          </div>
        </div>
      </div>

      {/* Additional Content Below */}
      <div className="flex-grow">
        {/* Other content can go here */}
      </div>
    </section>
  );
};

export default Homepage;