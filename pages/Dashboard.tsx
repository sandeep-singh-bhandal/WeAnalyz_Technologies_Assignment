import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 h-screen pt-20">
          <div className="relative h-1/2">
            <h1 className="text-4xl font-bold text-center h-3/12 pt-4">Dashboard</h1>
            <div className="flex flex-wrap  gap-10 justify-center h-9/12">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-evenly bg-[#2f82ff] w-1/5 rounded-lg p-2 shadow-[7px_7px_0px_rgba(158,166,161)] "
                >
                  <h1 className="text-center text-[#073c74]">Total Tickets</h1>
                  <h2 className="text-[100px] text-center text-[#073c74]">
                    12
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
