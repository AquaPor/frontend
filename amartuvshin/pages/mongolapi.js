import { useState, useEffect } from 'react';

export default function MongolAPI() {
  const [clothesData, setClothesData] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [toolsData, setToolsData] = useState([]);
  const [ethnicGroupsData, setEthnicGroupsData] = useState([]);
  const [provincesData, setProvincesData] = useState([]);
  const [historicalFiguresData, setHistoricalFiguresData] = useState([]);
  const [touristAttractionsData, setTouristAttractionsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('grid');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clothesResponse = await fetch('https://mongol-api-rest.vercel.app/clothes');
        const clothesResult = await clothesResponse.json();
        setClothesData(clothesResult.clothes || []);

        const instrumentsResponse = await fetch('https://mongol-api-rest.vercel.app/instruments');
        const instrumentsResult = await instrumentsResponse.json();
        setInstrumentsData(instrumentsResult.instruments || []);
        
        const toolsResponse = await fetch('https://mongol-api-rest.vercel.app/historicaltools');
        const toolsResult = await toolsResponse.json();
        setToolsData(toolsResult.tools || []);

        const ethnicGroupsResponse = await fetch('https://mongol-api-rest.vercel.app/EthnicGroups');
        const ethnicGroupsResult = await ethnicGroupsResponse.json();
        setEthnicGroupsData(ethnicGroupsResult.ethnic_groups || []);

        const provincesResponse = await fetch('https://mongol-api-rest.vercel.app/provinces');
        const provincesResult = await provincesResponse.json();
        setProvincesData(provincesResult.provinces || []);

        const historicalFiguresResponse = await fetch('https://mongol-api-rest.vercel.app/HistoricalFigures');
        const historicalFiguresResult = await historicalFiguresResponse.json();
        setHistoricalFiguresData(historicalFiguresResult.historical_figures || []);

        const touristAttractionsResponse = await fetch('https://mongol-api-rest.vercel.app/TouristAttractions');
        const touristAttractionsResult = await touristAttractionsResponse.json();
        setTouristAttractionsData(touristAttractionsResult.tourist_attractions || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredClothesData = clothesData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredInstrumentsData = instrumentsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredToolsData = toolsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredEthnicGroupsData = ethnicGroupsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredProvincesData = provincesData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredHistoricalFiguresData = historicalFiguresData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredTouristAttractionsData = touristAttractionsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Mongol API</h1>

      <div className="flex justify-between items-center w-full max-w-6xl mb-6">
        <input
          type="text"
          placeholder="Search for clothes, instruments, tools, ethnic groups, provinces, historical figures, or tourist attractions..."
          className="p-2 w-1/2 rounded-lg border-2 border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex space-x-4">
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded-lg ${view === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded-lg ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            List View
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Clothes</h2>
        <div className={`w-full ${view === 'grid' ? 'grid grid-cols-4 gap-8' : 'space-y-8'}`}>
          {filteredClothesData.map((item, index) => (
            <div key={index} className={`${
              view === 'grid' ? 'bg-white p-6 rounded-lg border border-black shadow-lg' : 'bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full'
            } text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-base text-gray-600 mb-2">{item.description}</p>
              {item.images && <img src={item.images} alt={item.name} className="w-full h-[200px] object-cover mb-4 rounded-md" />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instruments</h2>
        <div className={`w-full ${view === 'grid' ? 'grid grid-cols-4 gap-8' : 'space-y-8'}`}>
          {filteredInstrumentsData.map((item, index) => (
            <div key={index} className={`${
              view === 'grid' ? 'bg-white p-6 rounded-lg border border-black shadow-lg' : 'bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full'
            } text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-base text-gray-600 mb-2">{item.description}</p>
              {item.images && <img src={item.images} alt={item.name} className="w-full h-[200px] object-cover mb-4 rounded-md" />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Historical Tools</h2>
        <div className={`w-full ${view === 'grid' ? 'grid grid-cols-4 gap-8' : 'space-y-8'}`}>
          {filteredToolsData?.map((item, index) => (
            <div key={index} className={`${
              view === 'grid' ? 'bg-white p-6 rounded-lg border border-black shadow-lg' : 'bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full'
            } text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-base text-gray-600 mb-2">{item.description}</p>
              {item.images && <img src={item.images} alt={item.name} className="w-full h-[200px] object-cover mb-4 rounded-md" />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ethnic Groups</h2>
        <div className={`w-full ${view === 'grid' ? 'grid grid-cols-4 gap-8' : 'space-y-8'}`}>
          {filteredEthnicGroupsData.map((item, index) => (
            <div key={index} className={`${
              view === 'grid' ? 'bg-white p-6 rounded-lg border border-black shadow-lg' : 'bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full'
            } text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-base text-gray-600 mb-2">{item.description}</p>
              {item.images && <img src={item.images} alt={item.name} className="w-full h-[200px] object-cover mb-4 rounded-md" />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Provinces</h2>
        <div className={`w-full ${view === 'grid' ? 'grid grid-cols-4 gap-8' : 'space-y-8'}`}>
          {filteredProvincesData.map((item, index) => (
            <div key={index} className={`${
              view === 'grid' ? 'bg-white p-6 rounded-lg border border-black shadow-lg' : 'bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full'
            } text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-base text-gray-600 mb-2">{item.description}</p>
              {item.images && <img src={item.images} alt={item.name} className="w-full h-[200px] object-cover mb-4 rounded-md" />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Historical Figures</h2>
        <div className={`w-full ${view === 'grid' ? 'grid grid-cols-4 gap-8' : 'space-y-8'}`}>
          {filteredHistoricalFiguresData.map((item, index) => (
            <div key={index} className={`${
              view === 'grid' ? 'bg-white p-6 rounded-lg border border-black shadow-lg' : 'bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full'
            } text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-base text-gray-600 mb-2">{item.description}</p>
              {item.images && <img src={item.images} alt={item.name} className="w-full h-[200px] object-cover mb-4 rounded-md" />}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tourist Attractions</h2>
        <div className={`w-full ${view === 'grid' ? 'grid grid-cols-4 gap-8' : 'space-y-8'}`}>
          {filteredTouristAttractionsData.map((item, index) => (
            <div key={index} className={`${
              view === 'grid' ? 'bg-white p-6 rounded-lg border border-black shadow-lg' : 'bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full'
            } text-center`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h3>
              <p className="text-base text-gray-600 mb-2">{item.description}</p>
              {item.images && <img src={item.images} alt={item.name} className="w-full h-[200px] object-cover mb-4 rounded-md" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
