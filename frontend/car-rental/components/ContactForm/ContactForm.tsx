'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import contactContent from '@/public/contactContent.json';
import Button from '@/components/Button/Button';
import Link from 'next/link';

const contactFormSchema = z.object({
  phone: z.string().min(9, 'Błędny numer telfonu').max(11, 'Błędny numer telfonu'),
  email: z.string().email('Podaj poprawny adres email'),
  message: z.string().max(500, 'Wiadomość jest za długa'),
  policyAccepted: z.boolean().refine(val => val === true, {
    message: 'Musisz zaakceptować politykę prywatności',
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Wysłane dane:', data); //TODO
  };

  return (
    <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-1">
        <label htmlFor="phone">{contactContent.contactPhone} <span className="text-red-600">*</span></label>
        <input
          type="text"
          id="phone"
          placeholder={contactContent.contactPhonePlaceholder}
          {...register('phone')}
          className="border border-black rounded-md p-2"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
      </div>

      <div className="flex flex-col space-y-1 mt-4">
        <label htmlFor="email">{contactContent.contactEmail} <span className="text-red-600">*</span></label>
        <input
          type="text"
          id="email"
          placeholder={contactContent.contactEmailPlaceholder}
          {...register('email')}
          className="border border-black rounded-md p-2"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col space-y-1 mt-4">
        <label htmlFor="message">{contactContent.contactText}</label>
        <textarea
          id="message"
          rows={4}
          placeholder={contactContent.contactTextPlaceholder}
          {...register('message')}
          className="border border-black rounded-md p-2"
        ></textarea>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>

      <div className="flex items-start mt-4">
        <input
          type="checkbox"
          id="policyAccepted"
          {...register('policyAccepted')}
          className="mr-2 h-4 w-4 appearance-none accent-lime-500 checked:bg-lime-500 border border-gray-300 rounded"
        />
        <label htmlFor="policyAccepted" className="text-sm">
          {contactContent.processingPersonalData.p}
          <Link href="/"><span className="text-lime-600 pl-1">{contactContent.processingPersonalData.span}</span></Link>
        </label>
      </div>
      {errors.policyAccepted && <p className="text-red-600 text-sm mt-1">{errors.policyAccepted.message}</p>}

      <Button
        type="submit"
        className="bg-lime-500 text-black px-4 py-3 my-3 rounded-lg hover:bg-lime-600"
      >
        Wyślij wiadomość
      </Button>
    </form>
  );

};

export default ContactForm;