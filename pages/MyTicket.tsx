import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { IoIosSearch } from "react-icons/io";
import { ticketsData } from "../config/data";

const statusColors: Record<string, string> = {
  "In Progress": "bg-green-500",
  "On hold": "bg-blue-800",
  Closed: "bg-gray-600",
};

const MyTicket = () => {
  const [ratings, setRatings] = useState<number[]>(
    ticketsData.map((t) => t.rating)
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null);

  const rowsPerPage = 5;
  const totalPages = Math.ceil(ticketsData.length / rowsPerPage);
  const currentRows = ticketsData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleRating = (index: number, value: number) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-5/6 h-screen pt-20 px-20">
          <h2 className="text-2xl font-semibold text-center my-8">
            List of Tickets
          </h2>
          <div className="flex justify-between items-center px-4 w-1/3 bg-[#d9d9d9] rounded-lg">
            <input
              type="text"
              className="h-10 focus:outline-none "
              placeholder="Find ticket"
            />
            <IoIosSearch className="h-5 w-5" />
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 my-4">
              <label>Show:</label>
              <select className="border rounded px-2 py-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>Entries</span>
            </div>

            <table className="w-full text-lg text-left my-8">
              <thead>
                <tr>
                  <th className="p-2">Ticket No.</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Support by</th>
                  <th>Date</th>
                  <th className="text-center">Rate</th>
                </tr>
              </thead>
              <tbody className="border bg-[#dedede]">
                {currentRows.map((ticket, idx) => (
                  <tr
                    key={ticket.id}
                    onClick={() => {
                      setSelectedTicket(ticket);
                      setIsModalOpen(true);
                    }}
                    className="border-b even:bg-[#eaeaea] hover:bg-gray-100 h-14 cursor-pointer"
                  >
                    <td className="p-2 text-blue-600 underline">{ticket.id}</td>
                    <td>{ticket.subject}</td>
                    <td>
                      <span
                        className={`text-white text-xs px-2 py-1 rounded ${
                          statusColors[ticket.status] || "bg-gray-400"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td>{ticket.support}</td>
                    <td>{ticket.date}</td>
                    <td>
                      <div
                        className="flex justify-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            size={16}
                            className={`cursor-pointer ${
                              ratings[(currentPage - 1) * rowsPerPage + idx] >=
                              star
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-400"
                            }`}
                            onClick={() =>
                              handleRating(
                                (currentPage - 1) * rowsPerPage + idx,
                                star
                              )
                            }
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
                {Math.min(currentPage * rowsPerPage, ticketsData.length)} of{" "}
                {ticketsData.length} entries
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-2 border rounded disabled:opacity-50 cursor-pointer"
                  disabled={currentPage === 1}
                >
                  «
                </button>
                <span>{currentPage}</span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className="px-2 border rounded disabled:opacity-50 cursor-pointer"
                  disabled={currentPage === totalPages}
                >
                  »
                </button>
              </div>
            </div>
          </div>

          {isModalOpen && selectedTicket && (
            <div className="fixed inset-0 bg-[#000000cb] flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded shadow-md w-[320px] text-sm relative">
                <h3 className="text-center font-semibold text-lg mb-4">
                  Ticket Details
                </h3>
                <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
                <p><strong>Date:</strong> {selectedTicket.date}</p>
                <p><strong>Name:</strong> {selectedTicket.name}</p>
                <p><strong>Dept:</strong> {selectedTicket.department}</p>
                <p className="mt-2"><strong>Title:</strong> {selectedTicket.title}</p>
                <p><strong>Description:</strong> {selectedTicket.description}</p>
                <p><strong>Category:</strong> {selectedTicket.category}</p>
                <p><strong>Type:</strong> {selectedTicket.type}</p>
                <p><strong>Priority:</strong> {selectedTicket.priority}</p>
                <p><strong>Status:</strong> {selectedTicket.status}</p>
                <p><strong>Attachment:</strong> {selectedTicket.attachment}</p>

                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyTicket;
