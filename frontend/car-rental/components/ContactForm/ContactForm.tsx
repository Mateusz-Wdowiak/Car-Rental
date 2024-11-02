'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import contactContent from '@/public/contactContent.json';
import Button from '@/components/Button/Button';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="phone" className="">{contactContent.contactPhone}</label>
        <input type="text" id="phone"  {...register('phone')} className="border border-black rounded-md" />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="">{contactContent.contactEmail}</label>
        <input type="text" id="email"  {...register('email')} className="border-black" />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="">{contactContent.contactText}</label>
        <textarea id="message" rows={4}  {...register('message')} className="border-black"></textarea>
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="policyAccepted"
          {...register('policyAccepted')}
          className="mr-2"
        />
        <label htmlFor="policyAccepted">{contactContent.processingPersonalData.p}<span
          className="text-lime-600">{contactContent.processingPersonalData.span}</span></label>
      </div>
      {errors.policyAccepted && <p className="text-red-600 text-sm">{errors.policyAccepted.message}</p>}

      <Button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Wyślij wiadomość
      </Button>
    </form>
  );

};

export default ContactForm;