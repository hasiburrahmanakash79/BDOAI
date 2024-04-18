const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <h1 className="text-[80px] font-extrabold  text-blue-700">
            International Olympiad{" "}
            <span className="text-blue-400">in Artificial Intelligence</span>
          </h1>
        </div>
        <div className="col-span-3">
          <img
            src="https://ioai-official.org/wp-content/uploads/2023/10/Graphics.png"
            alt=""
          />
        </div>
      </div>
      <p className="w-2/3 mx-auto text-center mt-10">
        Welcome to the International Olympiad in Artificial Intelligence (IOAI)
        for high school students! The First edition of IOAI will take place in
        Bulgaria from August 9th to August 15th 2024
      </p>
    </div>
  );
};

export default Hero;
