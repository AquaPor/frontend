import { useState, useEffect } from 'react';

export default function Home() {
  const [bgColor, setBgColor] = useState("pink");
  const [data, setData] = useState(null);

  const jsonData = [
    { id: 1, color: 'red', bgColor: 'bg-red-500' },
    { id: 2, color: 'green', bgColor: 'bg-green-500' },
    { id: 3, color: 'blue', bgColor: 'bg-blue-500' }
  ];

  useEffect(() => {
    fetch('https://mongol-api-rest.vercel.app/clothes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
    setBgColor("pink");
  }, []);

  const handleClick = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen w-full items-center justify-center flex flex-col space-y-4"
    >
      <div>
        {jsonData.map(item => (
          <button
            key={item.id}
            onClick={() => handleClick(item.color)}
            className={`${item.bgColor} text-white m-2 w-[10vh] h-[5vh] border border-4 border-white rounded hover:bg-opacity-80 transition-colors`}
          >
            {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
