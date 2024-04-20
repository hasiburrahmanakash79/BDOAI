import { FaMedal } from "react-icons/fa6";
import OlympiadFeature from "./OlympiadFeature";

const Bdoai = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-7xl font-bold text-center text-blue-700 mt-7">
        What is BDOAI
      </h1>
      <div className="text-center flex flex-col items-center justify-center space-y-7 shadow-xl bg-white rounded p-10 mt-10">
        <div className="text-5xl text-blue-700">
          {" "}
          <FaMedal />
        </div>
        <h1 className="text-3xl font-semibold">What is a science olympiad</h1>
        <p className="text-lg">
          The International Science Olympiads are a group of worldwide annual
          competitions in various areas of the formal sciences, natural
          sciences, and social sciences. The competitions are designed for the
          4-6 best high school students from each participating country.
          <br />
          <br />
          Some of the most famous ISOs include the International Mathematical
          Olympiad (IMO) and the International Olympiad in Informatics (IOI).
          The aims of each ISO are to promote a career in science and to
          challenge the brightest students from around the world.
        </p>
      </div>
      <div>
        <div className="divider w-1/4 mx-auto mt-10"></div>
        <h1 className="text-4xl my-10 text-center font-bold">Format of the olympiad</h1>
        <OlympiadFeature/>
      </div>
    </div>
  );
};

export default Bdoai;
