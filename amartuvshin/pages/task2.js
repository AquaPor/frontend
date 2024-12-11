import { useState } from 'react';

const data = [
  { id: 1, desc: "First Article", alive: true },
  { id: 2, desc: "Second Article", alive: false },
  { id: 3, desc: "Third Article", alive: true },
  { id: 4, desc: "Fourth Article", alive: false },
];

function Task2() {
  const [grid, setGrid] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredData = data.filter(item =>
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerStyles = () => {
    let displayStyle = 'block';
    let gridTemplateColumns = 'none';

    if (grid) {
      displayStyle = 'grid';
      gridTemplateColumns = 'repeat(2, 1fr)';
    }

    return {
      display: displayStyle,
      gridTemplateColumns: gridTemplateColumns,
      gap: '20px',
    };
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex justify-center items-start p-6">
      <div className="w-[80%] relative bg-white p-6 rounded-lg shadow-md">

        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            className="w-3/4 px-4 py-3 border border-gray-300 rounded-md text-black"
            placeholder="Search Articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="ml-4 px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg transition duration-300 hover:bg-blue-400"
            onClick={() => setGrid(!grid)}
          >
            Toggle Grid
          </button>
        </div>
        <div className="text-black mt-6">
          <h1 className="text-2xl font-semibold mb-6">Articles</h1>

          <div
            className="text-black"
            style={containerStyles()}
          >
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <div
                  key={item.id}
                  className="p-6 border border-gray-200 flex justify-center items-center min-h-[100px] bg-gray-50 rounded-lg shadow-md transition duration-300 hover:shadow-xl"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.id}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="p-6 border border-gray-200 flex justify-center items-center min-h-[100px] bg-gray-50 rounded-lg shadow-md"
              >
                <p className="text-gray-500">No results found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task2;
