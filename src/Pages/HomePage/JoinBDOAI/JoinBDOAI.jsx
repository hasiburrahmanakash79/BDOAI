import { FaArrowRightLong } from "react-icons/fa6";

const JoinBDOAI = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">
        Are you ready <br /> for{" "}
        <span className="text-blue-700">Collaboration</span>
      </h1>
      <div className="grid grid-cols-2 items-center">
        <div className="space-y-5">
            <h1 className="text-4xl">BDOAI 2024</h1>
            <p className="text-lg ">The first ever edition of IOAI will take place in August 2024 in Bulgaria. The competition will focus on 3 areas of AI: Natural Language Processing, Machine Learning, and Computer Vision. The teams will compete against each other in a Scientific round and a Practical round.</p>
            <p className="text-lg">Sample problems are already published in the How to prepare section!</p>
            <button className="bg-blue-700 py-3 px-5 mt-5 rounded-full flex gap-3 items-center text-white">
            Join BDOAI 2024 <FaArrowRightLong />
          </button>
        </div>
        <div>
            <img src="https://ioai-official.org/wp-content/uploads/2023/10/Untitled-design.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinBDOAI;
