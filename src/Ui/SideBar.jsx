import { NavLink } from "react-router-dom";
import { SiCssdesignawards, SiGooglemarketingplatform } from "react-icons/si";
import {
  MdOutlineDeveloperMode,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { useLogout } from "../Features/Authentication/useLogout";
import { useUser } from "../Features/Authentication/useUser";

function SideBar() {
  const { user } = useUser();
  const fullname = user?.user_metadata?.fullname;
  const fullName = user?.user_metadata?.full_name;
  const avatar = user?.user_metadata?.avatar;

  const { logout } = useLogout();

  return (
    <div className="h-full w-full bg-darkGray text-beige">
      <nav className="flex flex-col items-start p-4 space-y-4">
        <div className="flex gap-x-4 items-center mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-yellow-400 overflow-hidden">
            <img
              src={avatar ? avatar : "default-user.jpg"}
              alt={fullname || "User"}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-2 text-lg font-semibold">
            {fullname ? fullname : fullName}
          </span>
        </div>

        <NavLink
          to="/academics/academics-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <IoMdFitness className="text-xl" />
          <span>Teaching & Academics</span>
        </NavLink>

        <NavLink
          to="/development/development-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <MdOutlineDeveloperMode className="text-xl" />
          <span>Development</span>
        </NavLink>

        <NavLink
          to="/design/design-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <SiCssdesignawards className="text-xl" />
          <span>Design</span>
        </NavLink>

        <NavLink
          to="/marketing/marketing-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <SiGooglemarketingplatform className="text-xl" />
          <span>Marketing</span>
        </NavLink>

        <NavLink
          to="/finance/finance-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <IoMdFitness className="text-xl" />
          <span>Accounting & Finance</span>
        </NavLink>

        <NavLink
          to="/business/business-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <MdOutlineBusinessCenter className="text-xl" />
          <span>Business</span>
        </NavLink>

        <NavLink
          to="/fitness/fitness-hero"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 w-full rounded-lg 
            ${isActive ? "bg-yellow-400 text-black" : "hover:bg-customGray"}`
          }
        >
          <IoMdFitness className="text-xl" />
          <span>Health & Fitness</span>
        </NavLink>

        <button
          className="bg-red-700 text-white flex items-center gap-2 p-2 rounded-lg w-full hover:bg-red-900 transition duration-300"
          onClick={logout}
        >
          <CiLogout className="text-xl" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
}

export default SideBar;
