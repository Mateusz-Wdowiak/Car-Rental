import { WhyUsBoxInterface } from '@/components/WhyUsBox/why-us-box.interface';
import Link from 'next/link';

const WhyUsBox: React.FC<WhyUsBoxInterface> = ({ rate, description, link, linkText, className = '' }) => {
  return (
    <div className={`flex items-start flex-col flex-start justify-end bg-zinc-800 ${className} p-5`}>
      <h3 className="text-lime-500 text-5xl p-5">{rate}</h3>
      <p className="text-xl text-white p-5">{description}</p>
      <Link href={link} className="text-lime-600 p-5">{linkText}</Link>
    </div>
  );
};

export default WhyUsBox;