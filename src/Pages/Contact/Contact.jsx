import { Button, Input, Textarea } from "@material-tailwind/react";
import { FaCommentDots } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-blue-700 text-center my-7">
        Contact us
      </h1>
      <div className="space-y-8 w-1/3 mx-auto">
        <p>
          Use the form below to get in touch with our team and ask any questions
        </p>
        <div className="divider text-5xl">
          <FaCommentDots />
        </div>
        <Input color="blue" label="Your Name" />
        <Input color="blue" label="Your Email" />
        <Input color="blue" label="Country" />
        <Textarea color="blue" label="Your Message" />
        <Button color="blue" variant="gradient" className="rounded-full w-full">
        Submit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
