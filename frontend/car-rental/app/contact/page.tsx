import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import contactContent from '@/public/contactContent.json';
import { contactData } from './contactData';
import ContactForm from '@/components/ContactForm/ContactForm';
import Instagram from '@/components/instagram/Instagram';

export default function Contact() {
  return (
    <>
      <Header />
      <section className="flex flex-col min-h-screen">
        <div className="flex items-end justify-center h-80 bg-black pb-5">
          <h1 className="text-3xl text-white">Kontakt</h1>
        </div>
        <div className="flex">
          <div className="flex flex-col bg-red-50 items-center w-1/2 p-4">
            <h2 className="text-2xl">{contactContent.title}</h2>
            {contactData.map((item, index) => (
              <p key={index} className={item.className}>{item.value}</p>
            ))}
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center p-4">
            <h2 className="text-2xl">{contactContent.title}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section>
        <Instagram></Instagram>
      </section>
      <Footer />
    </>
  );
}
