import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="container mx-auto py-36">
      <div className="grid grid-cols-2">
        <div className=" grid grid-cols-2 gap-10">
          <div>
            <img
              src="https://ioai-official.org/wp-content/uploads/2021/11/IOAI-1000-x-500-px.png"
              alt=""
            />
            <h1 className="text-lg">
              Official website of the International Olympiad in Artificial
              Intelligence
            </h1>
          </div>
          <div>
            <p className="text-xl font-bold mb-5">Quick Links</p>
            <div className="flex flex-col space-y-3 text-blue-700">
              <Link>Home</Link>
              <Link>Who is BDOAI</Link>
              <Link>Team</Link>
              <Link>Charter</Link>
              <Link>Regulations</Link>
              <Link>Contact Us</Link>
              <Link>Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold mb-5">Subscribe to our newsletter</p>
          <div className="relative flex w-full max-w-[30rem]">
            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={onChange}
              className="pr-20 rounded-full"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={email ? "gray" : "blue-gray"}
              disabled={!email}
              className="!absolute right-1 top-1 rounded-full"
            >
              Invite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
