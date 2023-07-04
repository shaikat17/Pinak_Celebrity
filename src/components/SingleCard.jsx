

const SingleCard = () => {
  return (
    <div className="relative max-w-xs mx-auto">
      <img
        src="https://img.freepik.com/free-photo/young-stylish-sexy-woman-cinema-backstage-celebrating-with-glass-champagne_285396-9015.jpg?size=626&ext=jpg&ga=GA1.2.1459026864.1687493706&semt=sph"
        alt="Card Image"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-1000 hover:opacity-100 hover:duration-100000">
        <h3 className="text-lg font-bold">Jhon Doe</h3>
        <p>{`Age: 33`}</p>
        <p>{`Country: USA`}</p>
      </div>
    </div>
  );
};

export default SingleCard;
