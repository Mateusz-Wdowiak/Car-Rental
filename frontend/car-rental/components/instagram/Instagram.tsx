import contactContent from '@/public/contactContent.json';

const Instagram = () => {
  return (
    <>
      <div>
        <h2>{contactContent.instagram.name}</h2>
        <p>{contactContent.instagram.profile}</p>
        <div>tutaj wyświetlić zdjęcia i kontakt z głowy</div>
      </div>
    </>
  );
};

export default Instagram;