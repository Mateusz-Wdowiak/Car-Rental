import { InfoboxProps } from '@/components/InfoBox/info-box.interface';

const Infobox: React.FC<InfoboxProps> = ({ icon, description, title, className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className} p-5`}>
      <div className="flex justify-center items-center my-8 bg-lime-500 text-3xl h-14 w-14 rounded-full flex-shrink-0">
        {icon}
      </div>
      <h2 className="text-xl font-semibold my-4 h-8 flex items-center justify-center">
        {title}
      </h2>
      <p className="text-gray-600 text-center px-5 flex-grow">{description}</p>
    </div>
  );
};

export default Infobox;