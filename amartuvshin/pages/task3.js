import { useState } from 'react';

const data = [
  { id: 1, name: "test", email: "test@gmail.com" },
  { id: 2, name: "test2", email: "test2@gmail.com" },
  { id: 3, name: "test3", email: "test3@gmail.com" },
  { id: 4, name: "test4", email: "test4@gmail.com" },
];

function Task3() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        {data.map((item) => (
          <div key={item.id} className="mb-4 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="text-xl font-semibold text-gray-800 mb-2">
              ID: <span className="font-normal text-gray-600">{item.id}</span>
            </div>
            <div className="text-xl font-semibold text-gray-800 mb-2">
              Name: <span className="font-normal text-gray-600">{item.name}</span>
            </div>
            <div className="text-xl font-semibold text-gray-800">
              Email: <span className="font-normal text-gray-600">{item.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task3;
