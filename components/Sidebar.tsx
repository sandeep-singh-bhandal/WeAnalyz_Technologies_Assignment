import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-1/6 bg-[#dfdfdf] pt-20">
      <div className="flex flex-col  space-y-3">
        <Link to={"/dashboard"} className="w-full font-semibold">Dashboard</Link>
        <Link to={"/new-ticket"} className="w-full font-semibold">New Tickets</Link>
        <Link to={"/my-ticket"} className="w-full font-semibold">My Tickets</Link>
      </div>
    </div>
  );
};

export default Sidebar;
