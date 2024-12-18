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

  let listButtonClass = "py-2 px-6 rounded-full text-lg font-medium transition duration-300 ease-in-out";
  let gridButtonClass = "py-2 px-6 rounded-full text-lg font-medium transition duration-300 ease-in-out";

  if (view === "list") {
    listButtonClass += " bg-indigo-600 text-white shadow-lg";
    gridButtonClass += " bg-gray-200 text-gray-800 hover:bg-indigo-100";
  } else {
    listButtonClass += " bg-gray-200 text-gray-800 hover:bg-indigo-100";
    gridButtonClass += " bg-indigo-600 text-white shadow-lg";
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex flex-col text-black w-full">
      <main className="flex-grow p-8 space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-lg w-full">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-800">Students</h2>
            <div className="flex space-x-4">
              <button
                className={listButtonClass}
                onClick={() => setView("list")}
              >
                List View
              </button>
              <button
                className={gridButtonClass}
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
            className="w-full p-3 mb-6 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          />
          {filteredData.length === 0 ? (
            <div className="text-center text-lg text-gray-600">
              <p>No results found. Try searching for another name.</p>
            </div>
          ) : (
            <div>
              {view === "list" ? (
                <div className="flex flex-wrap -mx-4">
                  {filteredData.map((student) => (
                    <div key={student.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                      <div className="p-6 bg-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-xl font-bold text-indigo-700">{student.firstname}</h3>
                        <p className="text-md text-gray-700">Age: {student.age}</p>
                        <p className="text-md text-gray-700">Hobby: {student.hobby}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredData.map((student) => (
                    <div key={student.id} className="p-6 bg-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-indigo-700">{student.firstname}</h3>
                      <p className="text-md text-gray-700">Age: {student.age}</p>
                      <p className="text-md text-gray-700">Hobby: {student.hobby}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
