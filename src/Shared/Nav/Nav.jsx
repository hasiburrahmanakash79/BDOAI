import React from "react";
import {
  Collapse,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const aboutListMenuItems = [
  {
    title: "Who is BDOAI",
    path: "/about"
  },
  {
    title: "Team",
    path: "/team"
  },
  {
    title: "Regulations",
    path: "/regulation"
  },
  {
    title: "Charter",
    path: "/charter"
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = aboutListMenuItems.map(({ title, path }, key) => (
    <div key={key}>
      <MenuItem className=" gap-3 rounded-lg">
        <div>
          <Link to={path} className="text-sm">
            {title}
          </Link>
        </div>
      </MenuItem>
    </div>
  ));
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Link to="/about" className="text-sm">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Link>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link to="/" className="text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Link>
      <NavListMenu />

      <Link to="/participate" className="text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Participate
        </ListItem>
      </Link>
      <Link to="/edition" className="text-sm">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Edition
        </ListItem>
      </Link>
    </List>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="md:px-10 py-4 px-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="w-1/4">
          <img
            src="https://ioai-official.org/wp-content/uploads/2021/12/IOAI-1000-x-500-px-1000-x-250-px.png"
            alt=""
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Link to="/contact">
            <Button className="bg-blue-700 rounded-full">contact</Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="w-full lg:hidden">
          <Link to="/contact">
            <Button className="bg-blue-700 w-full rounded-full">
              contact
            </Button>
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default Nav;
