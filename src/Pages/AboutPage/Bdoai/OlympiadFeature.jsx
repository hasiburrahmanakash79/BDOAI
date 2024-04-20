const OlympiadFeature = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <img
            src="https://ioai-official.org/wp-content/uploads/2023/10/Untitled-design-2.png"
            alt=""
          />
        </div>
        <div className="col-span-2">
            <h1 className="text-4xl font-bold text-blue-700 my-10">Scientific Round</h1>
          <h1>
            In this round, the participating teams are given problems that mimic
            real-world scientific research and the process of identifying and
            addressing limitations in an existing approach. Good performance in
            this round depends on basic coding skills, familiarity with common
            deep learning Python libraries, and an understanding of the
            fundamentals of machine learning.
            <br />
            <br />
            The teams receive 3 problems based on recent AI research 6 weeks in
            advance of the IOAI, and work on them on their own schedule. At the
            end of the allotted time, the teams submit their solutions to all 3
            problems in the form of working code and model outputs.
            <br />
            <br />
            At the IOAI, the teams receive a set of 3 new problems to solve,
            which build on the 3 problems they worked on at home, i.e. the
            general setting remains the same in terms of AI task, data type, and
            model architecture, but the teams have to solve a new challenge
            within this setting.
            <br />
            <br />
            The problems in the scientific round will be distributed as Google
            Colab notebooks and solutions will be submitted as a modified
            version of the same notebook. Participants are required to use
            Python for their solutions and to ensure that upon submission their
            notebooks are fully executable within the Colab environment. Further
            instructions will be given for specific problems regarding the
            maximum time a notebook should take to execute, the restrictions on
            the use of pre-trained models, of external data, etc.
            <br />
            <br />
            The deliverables for each problem will be clearly stated in the
            problem description and may include: a score measured on a specific
            data split, a short written answer or methodological report, a plot
            visualizing some statistics or results, and others. Each problem
            will specify how points are distributed between the different
            deliverables. The final scores for this round are based in small
            part on the performance of the solutions developed at home, and in
            large part on the performance of the solutions developed on site.
            Exact scoring details will be provided upon distribution of the
            first set of problems.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OlympiadFeature;
