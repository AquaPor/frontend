import { useState } from 'react';

function Task2() {
  const [search, setSearch] = useState("");

  return (
    <div className='bg-red-400 h-[100vh] w-[100%] flex justify-center items-center flex-col'>
      <div className="mb-4">
        <p>Search: {search}</p>
      </div>

      <div>
        <input 
          type='search' 
          onChange={(e) => setSearch(e.target.value)} 
          value={search}
          className="p-2 border-2 rounded-md text-black"
        />
      </div>
    </div>
  );
}

export default Task2;

