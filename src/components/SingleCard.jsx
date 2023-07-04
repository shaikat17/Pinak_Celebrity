

const SingleCard = ({id, name, image, age, birthPlace, birthSign, country}) => {
  return (
    <div className="relative max-w-xs mx-auto">
      <img
        src={image}
        alt={name}
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-1000 hover:opacity-100 hover:duration-100000">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>{`Age: ${age}`}</p>
        <p>{`Country: ${country}`}</p>
      </div>
    </div>
  );
};

export default SingleCard;
