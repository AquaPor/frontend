import { useState } from 'react';

const data = [
  { id: 1, desc: "Нэгдүгээр Нийтлэл" },
  { id: 2, desc: "Хоёрдугаар Нийтлэл" },
  { id: 3, desc: "Гуравдугаар Нийтлэл" },
  { id: 4, desc: "Дөрөвдүгээр Нийтлэл" },
];

function Task3() {
  const [grid, setGrid] = useState(false);

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
    <div className="h-screen w-full bg-white flex justify-center items-start">
      <div className="w-[80%] relative">
        <button
          className="absolute top-4 right-4 text-white px-6 py-3 bg-blue-500 rounded-md shadow-lg transition duration-300 hover:bg-blue-400"
          onClick={() => setGrid(!grid)}
        >
          Toggle Grid
        </button>

        <div className="text-black mt-6">
          <h1 className="text-2xl font-semibold mb-6">Нийтлэлүүд</h1>

          <div
            className="text-black"
            style={containerStyles()} 
          >
            {data.map(item => (
              <div
                key={item.id}
                className="p-6 border border-gray-200 flex justify-center items-center min-h-[100px] bg-gray-50 rounded-lg shadow-md transition duration-300 hover:shadow-xl"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.id}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task3;
