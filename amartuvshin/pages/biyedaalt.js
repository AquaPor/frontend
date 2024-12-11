import { useRouter } from "next/router";
import { useState } from "react";

const data = [
  { id: 1, firstname: "Amartuvshin", age: 16, hobby: "Reading" },
  { id: 2, firstname: "AnrErdnn", age: 16, hobby: "Soccer" },
  { id: 3, firstname: "AnrGedgBha", age: 16, hobby: "Coding" },
  { id: 4, firstname: "Batmend", age: 16, hobby: "Painting" },
  { id: 5, firstname: "Dalaisuren", age: 16, hobby: "Swimming" },
  { id: 6, firstname: "Emily", age: 16, hobby: "Traveling" },
  { id: 7, firstname: "Enkhjav", age: 16, hobby: "Photography" },
  { id: 8, firstname: "Kurayami", age: 16, hobby: "Basketball" },
  { id: 9, firstname: "Hanbileg", age: 16, hobby: "Cycling" },
  { id: 10, firstname: "Kemi", age: 15, hobby: "Cooking" },
  { id: 11, firstname: "Ochir-Erdene", age: 16, hobby: "Music" },
  { id: 12, firstname: "Shine Erdene", age: 16, hobby: "Fishing" },
  { id: 13, firstname: "Temka", age: 16, hobby: "Video games" },
  { id: 14, firstname: "Temuujin", age: 16, hobby: "Writing" },
  { id: 15, firstname: "Ter Gel", age: 16, hobby: "Yoga" },
  { id: 16, firstname: "Tmulen", age: 16, hobby: "Running" },
  { id: 17, firstname: "Tselmeg", age: 16, hobby: "Dancing" },
  { id: 18, firstname: "Tugsuu", age: 16, hobby: "Skating" },
  { id: 19, firstname: "UchkaBho", age: 16, hobby: "Gardening" },
  { id: 20, firstname: "Choi", age: 16, hobby: "Baking" },
];

export default function Biyedaalt() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [view, setView] = useState("list");

  const filteredData = data.filter((student) =>
    student.firstname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col text-black w-full">
      <main className="flex-grow p-6 space-y-6">
        <section className="bg-white p-6 rounded-lg shadow-md w-full">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Students</h2>
            <div className="flex space-x-2">
              <button
                className={`py-1 px-3 rounded ${
                  view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setView("list")}
              >
                List View
              </button>
              <button
                className={`py-1 px-3 rounded ${
                  view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setView("grid")}
              >
                Grid View
              </button>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-4 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
          {view === "list" ? (
            <div className="flex flex-wrap -mx-2">
              {filteredData.map((student) => (
                <div
                  key={student.id}
                  className="w-full sm:w-1/2 lg:w-1/3 p-2"
                >
                  <div className="p-4 bg-gray-200 rounded shadow-sm flex flex-col">
                    <span className="font-bold">{student.firstname}</span>
                    <span>Age: {student.age}</span>
                    <span>Hobby: {student.hobby}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredData.map((student) => (
                <div
                  key={student.id}
                  className="p-4 bg-gray-200 rounded shadow-sm flex flex-col items-center"
                >
                  <span className="font-bold">{student.firstname}</span>
                  <span>Age: {student.age}</span>
                  <span>Hobby: {student.hobby}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
