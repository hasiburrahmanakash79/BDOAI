import { FaMedal, FaSchool, FaHandshake } from "react-icons/fa6";

const OlympiadCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-10">
        <div className="text-center flex flex-col items-center justify-center space-y-7">
          <div className="divider text-7xl w-1/2 mx-auto">
            {" "}
            <FaMedal />
          </div>
          <h1 className="text-2xl font-semibold">Does your team want to participate in the Olympiad?</h1>
          <p className="text-lg">We are looking for local organizations which will make the selection of each countries team</p>
          <button className="bg-blue-700 py-3 px-5 rounded-full flex gap-3 mt-5 items-center text-white">
              See how to participate
            </button>
        </div>
        <div className="text-center flex flex-col items-center justify-center space-y-7">
          <div className="divider text-7xl w-1/2 mx-auto">
            {" "}
            <FaSchool />
          </div>
          <h1 className="text-2xl font-semibold">Does your team want to participate in the Olympiad?</h1>
          <p className="text-lg">We are looking for local organizations which will make the selection of each countries team</p>
          <button className="bg-blue-700 py-3 px-5 rounded-full flex gap-3 mt-5 items-center text-white">
              See how to participate
            </button>
        </div>
        <div className="text-center flex flex-col items-center justify-center space-y-7">
          <div className="divider text-7xl w-1/2 mx-auto">
            {" "}
            <FaHandshake />
          </div>
          <h1 className="text-2xl font-semibold">Does your team want to participate in the Olympiad?</h1>
          <p className="text-lg">We are looking for local organizations which will make the selection of each countries team</p>
          <button className="bg-blue-700 py-3 px-5 rounded-full flex gap-3 mt-5 items-center text-white">
              See how to participate
            </button>
        </div>
      </div>
    </div>
  );
};

export default OlympiadCard;
