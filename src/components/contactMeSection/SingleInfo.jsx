const SingleInfo = ({ text, Image, link }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p><a href={link}>{text}</a></p>
    </div>
  );
};

export default SingleInfo;
