const Hero = () => {
  return (
    <div className="p-4">
      <div className="md:grid grid-cols-5 items-center">
        <div className="col-span-2">
          <h1 className="md:text-7xl text-3xl font-extrabold  text-blue-700">
            Bangladesh Olympiad{" "}
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
      <p className="md:w-2/3 mx-auto text-center mt-10">
        Welcome to the Bangladesh Olympiad in Artificial Intelligence (BDOAI)
        for high school students! The First edition of BDOAI will take place in
        Dhaka from August 9th to August 15th 2024
      </p>
    </div>
  );
};

export default Hero;
