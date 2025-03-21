import { useState, useEffect } from "react";

export default function mongolapi() {
  const [clothes, setClothes] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [historicalTools, setHistoricalTools] = useState([]);
  const [ethnicGroups, setEthnicGroups] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [historicalFigures, setHistoricalFigures] = useState([]);
  const [touristAttractions, setTouristAttractions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('grid');

  useEffect(() => {
    const fetchData = async () => {
      const fetchAndCheck = async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) return {};
          return response.json();
        } catch {
          return {};
        }
      };

      setClothes((await fetchAndCheck("https://mongol-api-rest.vercel.app/clothes")).clothes || []);
      setInstruments((await fetchAndCheck("https://mongol-api-rest.vercel.app/instruments")).instruments || []);
      setHistoricalTools((await fetchAndCheck("https://mongol-api-rest.vercel.app/historicaltools")).historicalTools || []);
      setEthnicGroups((await fetchAndCheck("https://mongol-api-rest.vercel.app/EthnicGroups")).ethnicGroups || []);
      setProvinces((await fetchAndCheck("https://mongol-api-rest.vercel.app/provinces")).provinces || []);
      setHistoricalFigures((await fetchAndCheck("https://mongol-api-rest.vercel.app/HistoricalFigures")).historicalFigures || []);
      setTouristAttractions((await fetchAndCheck("https://mongol-api-rest.vercel.app/TouristAttractions")).touristAttractions || []);
    };
    fetchData();
  }, []);

  // Filter data
  const filterData = (data) => data.filter(item => item.name?.toLowerCase().includes(searchQuery.toLowerCase()));

  const categories = [
    { title: "Traditional Clothes", data: filterData(clothes), key: "clothes" },
    { title: "Traditional Instruments", data: filterData(instruments), key: "instruments" },
    { title: "Historical Tools", data: filterData(historicalTools), key: "historicalTools" },
    { title: "Ethnic Groups", data: filterData(ethnicGroups), key: "ethnicGroups" },
    { title: "Provinces", data: filterData(provinces), key: "provinces" },
    { title: "Historical Figures", data: filterData(historicalFigures), key: "historicalFigures" },
    { title: "Tourist Attractions", data: filterData(touristAttractions), key: "touristAttractions" }
  ];

  return (
    <div className="bg-gray-50">
      <header className="flex justify-between items-center py-6 px-16 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg text-white">
        <h1 className="text-4xl font-bold tracking-wide">Explore Mongolian Culture</h1>
      </header>

      <div className="relative block mt-2 mx-16 mb-8">
        <input
          className="placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4 shadow-sm"
          placeholder="Search for items..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <main className="px-4">
        {categories.map(({ title, data, key }) => (
          <div key={key} className="my-6 mx-12">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">{title}</h2>
            {data.length > 0 ? (
              <div className={`w-full ${view === 'grid' ? 'grid grid-cols-3 gap-8' : 'space-y-8'}`}>
                {data.map(item => (
                  <div key={item.id} className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg text-center">
                    {item.images ? (
                      <img className="w-full h-[200px] object-cover mb-4 rounded-md" src={item.images[0]} alt={item.name} />
                    ) : (
                      <div className="w-full h-[200px] bg-gray-200 mb-4 rounded-md flex justify-center items-center">No Image</div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name || 'No name available'}</h3>
                    <p className="text-base text-gray-600 mb-2">{item.description || 'No description available'}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No data</p>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
