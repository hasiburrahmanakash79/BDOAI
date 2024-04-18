import { FaTrophy, FaArrowRightLong } from "react-icons/fa6";
const HomeAbout = () => {
  return (
    <div className=" mt-20">
      <div className="grid grid-cols-3">
        <div className="col-span-2 p-10 shadow-xl rounded-xl bg-white">
          <FaTrophy className="text-6xl text-blue-600" />
          <h1 className="text-2xl py-4 font-bold">About</h1>
          <h1 className="text-lg">
            IOAI is a prestigious annual competition designed for high school
            students who are passionate about the exciting world of artificial
            intelligence. Our mission is to inspire and challenge young minds to
            explore the limitless possibilities of AI, fostering the next
            generation of AI pioneers and problem solvers.
          </h1>
          <button className="bg-blue-700 py-3 px-5 mt-5 rounded-full flex gap-3 items-center text-white">
            Learn More <FaArrowRightLong />
          </button>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div>
        <div className="grid grid-cols-3 mt-10">
        <div className="col-span-1"></div>
          <div className="col-span-2 p-10 shadow-xl rounded-xl bg-white">
            <FaTrophy className="text-6xl text-blue-600" />
            <h1 className="text-2xl py-4 font-bold">About</h1>
            <h1 className="text-lg">
              IOAI is a prestigious annual competition designed for high school
              students who are passionate about the exciting world of artificial
              intelligence. Our mission is to inspire and challenge young minds
              to explore the limitless possibilities of AI, fostering the next
              generation of AI pioneers and problem solvers.
            </h1>
            <button className="bg-blue-700 py-3 px-5 rounded-full flex gap-3 items-center text-white">
              Learn More <FaArrowRightLong />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
