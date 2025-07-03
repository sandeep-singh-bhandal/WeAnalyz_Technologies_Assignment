import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="bg-[#55d6c2] fixed top-0 w-full flex justify-between text-white p-4">
      <h1 className="text-[30px] font-bold italic">Helpdesk</h1>
      <div
        className="flex items-center gap-6"
        
      >
        {/* Toggle Switch */}
        <div
          className={`flex rounded-lg overflow-hidden  ${
            clicked
              ? "border-r-black border-l-[#55d6c2]"
              : "border-l-black border-r-[#55d6c2]"
          } border-x-4 `}
          onClick={() => setClicked(!clicked)}
        >
          <button
            className={` px-3 py-1 text-sm cursor-pointer border border-black ${
              clicked ? "bg-black text-white" : "bg-none text-black"
            }`}
          >
            BM
          </button>
          <button
            className={`px-3 py-1 text-sm  cursor-pointer border border-black ${
              clicked ? "bg-none text-black" : "bg-black text-white"
            }`}
          >
            BI
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-black">
          <FaBell className="w-5 h-5" />
          <Link to={"/user-profile"}>
          <IoPerson className="w-5 h-5" />
          </Link>
          <Link to={"/sign-in"}>
          <RxExit className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
