import MenuNavbar from "./navbar/Menu";
import { User, SunMoon } from "lucide-react";

const Navbar = () => {
  return (
    <nav aria-label="navbar" className="bg-white shadow-sm ">
      <div className="flex justify-between p-4 px-6 items-center">
        <a className="btn btn-ghost text-xl ">Logo</a>
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-100 rounded-full cursor-pointer">
            <User />
          </div>
          <span className="leading-4">
            <h3 className="text-sm">USER</h3>
            <p className="text-xs text-gray-500">Role</p>
          </span>
          <span className="px-4">
            <SunMoon />
          </span>
        </div>
      </div>
      <div className="flex justify-end lg:flex lg:justify-center">
        <ul>
          <MenuNavbar />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
