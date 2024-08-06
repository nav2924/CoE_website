import { Link } from "react-router-dom";
import ShimmerButton from "@/components/magicui/shimmer-button";

function Navbar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Services",
      path: "/path",
    },
    {
      id: 3,
      name: "Research and Innovation",
      path: "/",
    },
    {
      id: 4,
      name: "Programs Offered",
      path: "/",
    },
    {
      id: 5,
      name: "Events",
      path: "/",
    },
    {
      id: 6,
      name: "Facilities",
      path: "/",
    },
  ];

  return (
    <div className="md:px-20">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-xl font-semibold">Center of Excellence</span>
        </div>
        <ul className="md:flex gap-8 hidden flex-1 justify-center">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ShimmerButton className="shadow-2xl bg-primary px-4 py-2">
          <span className="text-center text-sm font-medium leading-none tracking-tight text-white lg:text-base">
            Get Started
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
}

export default Navbar;
