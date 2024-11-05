import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import whyUsBgc from '@/public/whyUsBgc.jpg';
import Instagram from '@/components/instagram/Instagram';
import WhyUsBox from '@/components/WhyUsBox/WhyUsBox';
import whyUsContent from '@/public/whyUsContent.json';
import aboutUsImg from '@/public/aboutUsImg.jpg';
import aboutUsImg2 from '@/public/aboutUsImg2.jpg';

export default function WhyUs() {
  return (
    <>
      <Header />
      <section>
        <div className="relative w-full overflow-hidden">
          <Image
            src={whyUsBgc}
            alt="Descriptive Alt Text"
            className="object-cover object-center w-full h-96"
          />

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center p-4">
            <h1 className="text-3xl font-bold mb-4">Dlaczego my?</h1>
            <p className="max-w-xl text-xl">
              Jeżeli motoryzacja to twoja pasja i marzyłeś aby przejechać się swoim dream carem to trafiłeś w idealne
              miejsce! W naszej flocie znajdziesz coś na każdą okazję: auta rodzinne, sportowe, amerykańskie oraz wiele
              innych.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-around min-h-96 bg-zinc-900 p-4 ">
        <WhyUsBox
          className="w-1/5 rounded-lg m-2"
          rate="4,7"
          description="Średnia ocena naszych klientów w tym roku"
          linkText="Zobacz opinie klientów"
          link="/"
        />
        <WhyUsBox
          className="w-1/5 rounded-lg m-2"
          rate="24/7"
          description="Dostępność wykonywanych przez nas usług"
          linkText="Skontaktuj się z nami"
          link="/contact"
        />
        <WhyUsBox
          className="w-1/5 rounded-lg m-2"
          rate="20+"
          description="Łączna ilość samochodów z klasy premium"
          linkText="Zobacz nasze samochody"
          link="/"
        />
      </section>
      <div className="flex flex-col items-center gap-10 bg-zinc-900 py-10">
        <h2 className="text-4xl text-white mt-5">Nasz zespół</h2>
        <div className="flex flex-col items-center max-w-screen-md w-full mx-auto gap-8 px-5">
          <div className="flex justify-center gap-20">
            <div className="flex flex-col items-center gap-5">
              <Image src={aboutUsImg} alt="car img" className="rounded-xl max-w-[500px] mx-auto" />
              <Image src={aboutUsImg2} alt="second car img"
                     className="rounded-xl max-w-[400px] mx-auto" />
            </div>
            <div className="flex flex-col text-white text-l w-[350px] gap-10">
              <p className="">{whyUsContent.textContent}</p>
              <p className="">{whyUsContent.secondTextContent}</p>
              <p className="">{whyUsContent.thirdTextContent}</p>
              <p className="">{whyUsContent.endingText}</p>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
      <Footer />
    </>
  );
}