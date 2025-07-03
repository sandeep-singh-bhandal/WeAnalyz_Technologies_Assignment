import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const NewTicket = () => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 h-screen pt-20">
          <h2 className="text-2xl font-semibold text-center my-8">
            Create New Ticket
          </h2>

          <form className="space-y-4 w-10/12 mx-auto">
            <div className="grid grid-cols-2 gap-30">
              <div className="flex gap-10">
                <label className="block font-medium w-2/12">Ticket No.</label>
                <input className="focus:outline-none w-10/12 border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
              </div>
              <div className="flex gap-10">
                <label className="block font-medium w-2/12">Date</label>
                <input className="focus:outline-none w-10/12 border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-30">
              <div className="flex gap-10">
                <label className="block font-medium w-2/12">Name</label>
                <input className="focus:outline-none w-10/12 border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
              </div>
              <div className="flex gap-8">
                <label className="block font-medium w-2/12">Department</label>
                <input className="focus:outline-none w-10/12 border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
              </div>
            </div>
            <div>
              <label className="block font-medium">Subject:</label>
              <input className="focus:outline-none w-full border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block font-medium">Category:</label>
                  <input className="focus:outline-none w-full border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
                </div>
                <div>
                  <label className="block font-medium">Type:</label>
                  <input className="focus:outline-none w-full border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
                </div>
                <div>
                  <label className="block font-medium">Priority:</label>
                  <input className="focus:outline-none w-full border rounded px-3 py-1 shadow bg-[#d9d9d9] border-none focus:border-none" />
                </div>
              </div>

              <div className="h-full">
                <label className="block font-medium h-2/12">Description:</label>
                  <textarea className="focus:outline-none w-full h-10/12 border rounded px-3 py-2 shadow resize-none bg-[#d9d9d9] border-none focus:border-none"></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-400 float-right hover:bg-teal-500 text-black font-medium px-20 py-2 rounded shadow mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default NewTicket;
