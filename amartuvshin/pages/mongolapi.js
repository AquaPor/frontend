import { useState, useEffect } from 'react';

export default function mongolapi() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const result = await response.json();
        setData(result.clothes || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Mongol API</h1>
      
      <input
        type="text"
        placeholder="Search for clothes..."
        className="p-2 mb-6 w-1/2 rounded-lg border-2 border-gray-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="grid grid-cols-4 gap-8 w-full max-w-6xl">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-black shadow-lg w-full h-full text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
            <p className="text-base text-gray-600 mb-2">{item.description}</p>
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-[200px] object-cover mb-4 rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
