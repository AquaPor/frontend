import { useState } from 'react';

const data = [
  { id: 1, desc: "First Article", alive: true },
  { id: 2, desc: "Second Article", alive: false },
  { id: 3, desc: "Third Article", alive: true },
  { id: 4, desc: "Fourth Article", alive: false },
];

function Task4() {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = data.filter(item =>
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen w-full bg-white flex justify-center items-start">
      <div className="w-[80%] relative">
        
        <input
          type="text"
          className="w-full mt-4 mb-4 px-6 py-3 border border-gray-300 rounded-md text-black"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="text-black">
          
          <div className="text-black">
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <div
                  key={item.id}
                  className="p-4 border border-gray-200 flex items-start min-h-[20px] bg-gray-50 rounded-lg mb-4"
                >
                  <div className="text-left w-full">
                    <h3 className="text-xl font-semibold mb-2">{item.id}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="p-4 border border-gray-200 flex items-start min-h-[80px] bg-gray-50 rounded-lg mb-4"
              >
                <p className="text-left text-gray-500 w-full">No results found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task4;
