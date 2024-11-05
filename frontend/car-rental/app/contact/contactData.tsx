import contactContent from '@/public/contactContent.json';

export const contactData = [
  { label: 'Call us', value: contactContent.callUs, className: 'mb-5' },
  { label: 'Hotline', value: contactContent.hotline, className: 'font-bold' },
  { label: 'Main Mail', value: contactContent.mainMail, className: '' },
  { label: 'Main Phone', value: contactContent.mainPhone, className: '' },
  { label: 'Hotline Open', value: contactContent.hotlineOpen, className: 'mt-5' },
  { label: 'Hotline Open Text', value: contactContent.hotlineOpenText, className: '' },
  { label: 'Marketing', value: contactContent.marketing, className: 'mt-5 font-bold' },
  { label: 'Marketing Email', value: contactContent.marketingEmail, className: '' },
  { label: 'Address Title', value: contactContent.addressTitle, className: 'text-2xl mt-5' },
  { label: 'Address Street', value: contactContent.address.street, className: 'mt-3' },
  { label: 'Address ZipCode', value: contactContent.address.zipCode, className: '' },
];


