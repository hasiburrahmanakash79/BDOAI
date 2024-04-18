import { FaArrowRightLong } from "react-icons/fa6";

const JoinBDOAI = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">
        Are you ready <br /> for{" "}
        <span className="text-blue-700">Collaboration</span>
      </h1>
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl">BDOAI 2024</h1>
          <p className="text-lg ">
            The first ever edition of IOAI will take place in August 2024 in
            Bulgaria. The competition will focus on 3 areas of AI: Natural
            Language Processing, Machine Learning, and Computer Vision. The
            teams will compete against each other in a Scientific round and a
            Practical round.
          </p>
          <p className="text-lg">
            Sample problems are already published in the How to prepare section!
          </p>
          <button className="bg-blue-700 py-3 px-5 mt-5 rounded-full flex gap-3 items-center text-white">
            Join BDOAI 2024 <FaArrowRightLong />
          </button>
        </div>
        <div>
          <img
            src="https://ioai-official.org/wp-content/uploads/2023/10/Untitled-design.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://ioai-official.org/wp-content/uploads/2023/10/Untitled-design-1.png"
            alt=""
          />
        </div>
        <div className="space-y-5 flex flex-col justify-end items-end text-end">
          <h1 className="text-4xl">Next steps</h1>
          <p className="text-lg ">
          Are you ready to bring your AI aspirations to life? Explore IOAI and prepare to embark on an unforgettable AI journey!
          </p>
          <p className="text-lg">
          Organizations from all countries are invited to apply for accreditation in order to send a national team to the competition. If you are a student, get in touch with your country representative to learn about each countries national selection process.
          </p>
          <button className="bg-blue-700 py-3 px-5 mt-5 rounded-full flex gap-3 items-center text-white">
            List of countries <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinBDOAI;
